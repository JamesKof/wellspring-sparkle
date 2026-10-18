# Architecture rules
- Keep management screens separate from the legacy public website; the management workspace is the default entry point.
- Use Cloud Auth for identity and PostgreSQL RLS plus security-definer role helpers for all shared-data authorization; UI visibility is not a security boundary.
- Store permissions in a protected role table, never profile metadata; new accounts remain pending until an MD assigns a role.
- Bootstrap the first MD through an explicitly owner-approved account assignment, never first-signup promotion.
- Audit record and permission changes with database triggers and expose logs read-only to leadership.