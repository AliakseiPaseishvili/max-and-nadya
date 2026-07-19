import { prisma } from '@/app/lib/prisma';

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { name, email, attending } = (body ?? {}) as {
    name?: unknown;
    email?: unknown;
    attending?: unknown;
  };

  if (typeof name !== 'string' || name.trim() === '') {
    return Response.json({ error: 'name is required' }, { status: 400 });
  }
  if (typeof email !== 'string' || email.trim() === '') {
    return Response.json({ error: 'email is required' }, { status: 400 });
  }
  if (attending !== 'yes' && attending !== 'no') {
    return Response.json({ error: 'attending must be "yes" or "no"' }, { status: 400 });
  }

  try {
    const record = await prisma.rsvp.create({
      data: { name: name.trim(), email: email.trim(), attending },
    });
    return Response.json(record, { status: 201 });
  } catch {
    return Response.json({ error: 'Failed to save RSVP' }, { status: 500 });
  }
}
