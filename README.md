## Run Project Locally

1. Be sure you're using a proper version of node, I used v22.13.1 while working on this.
2. Install all dependencies by doing an `npm install` first.
3. Run the development server locally with `npm run dev`.
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## What I would have added with more time

1. Data Visualizations - I ran out of time to work on the last feature listed in the requirements, the two data visualizations.  The two that I was thinking about adding were:
    a. Game Score Insights: Within the Scores data set, there is information for power plays, shootouts, etc.  I wanted to make each cell in the Score column clickable with each score bringing up a modal that would provide these extra details about the game and the final score.
    b. Player Season Metrics: Within the seasonMetrics data set, there is information for various metrics around goals, shots, ice time, etc.  I wanted to make each cell in the First Name column clickable with each name bringing up a modal that would provide these extra details about the players and their stats.
2. Table Heading Stickiness - I was going to make the table headings sticky and the table scrollable if you incresed the rows per page number past the default of 10.  However, this would have mostly nullified the requirement for the page header to be sticky since the page content likely wouldn't have grown tall enough to cause a scroll to occur.  I think it would make the table more easily usable though because the column headers would stay in place as you scrolled.
3. Accessibility testing - I would have taken some more time to do some accessibility testing and make sure that things were properly tabbable with a keyboard and that the experience was easy for everyone.  I always try to build with this in mind, but it's always nice to be able to double check and test for these things more specifically.
4. Responsiveness on small screens - I would have also have loved to be able to spend some more time on a more responsive view for the tables on smaller screens.  Horizontal scrolls are passable as responsive, but there are better options that don't include horizontal scrolls thta I would have loved to explore more.

## Extra Information

If for whatever reason you have trouble running the project from the submitted zip file, the project can be cloned from the following [GitHub Repository](https://github.com/amandahase/ducks-hockey).

I also deployed it using Vercel, so the full project can be [viewed here](https://ducks-hockey.vercel.app/) in a production environment.
