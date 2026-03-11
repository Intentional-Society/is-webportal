<h1 align="center">is-webportal</h1>

This repository deploys to <a href="https://www.intentionalsociety.org">www.intentionalsociety.org</a>.

## Members Directory Local Data Setup

The unlisted members directory page reads from a local CSV file at runtime.

- Place your downloaded member CSV at: `static/data/members.csv`
- The filename must be exactly: `members.csv`
- This file is intentionally gitignored (do not commit real member data)

The page URL is:

- `/members-directory-9x4k2`

When running locally, verify the CSV is being served at:

- `http://localhost:8000/data/members.csv`
