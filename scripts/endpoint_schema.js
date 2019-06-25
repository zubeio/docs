module.exports ={
  "accounts": [
    {
      // index
      "path": "/api/accounts",
      "rawPath": "/api/accounts",
      "method": "GET"
    },
    {
      // read
      "path": "/api/accounts/:account_id",
      "rawPath": "/api/accounts/:id",
      "method": "GET"
    },
    // Account Admin Members
    {
      // index
      "path": "/api/accounts/:account_id/admin_members",
      "rawPath": "/api/accounts/:id/admin_members",
      "method": "GET"
    },
    {
      // create
      "path": "/api/accounts/:account_id/admin_members",
      "rawPath": "/api/accounts/:id/admin_members",
      "method": "POST"
    },
    {
      // destroy
      "path": "/api/accounts/:account_id/admin_members/:admin_member_id",
      "rawPath": "/api/accounts/:account_id/admin_members/:id",
      "method": "DELETE"
    },
    // Account Members
    {
      // index
      "path": "/api/accounts/:account_id/members",
      "rawPath": "/api/accounts/:id/members",
      "method": "GET"
    },
    {
      // create
      "path": "/api/accounts/:account_id/members",
      "rawPath": "/api/accounts/:id/members",
      "method": "POST"
    },
    {
      // destroy
      "path": "/api/accounts/:account_id/members/:member_id",
      "rawPath": "/api/accounts/:account_id/members/:id",
      "method": "DELETE"
    },
  ],
  "cards": [
    {
      // index
      "path": "/api/cards",
      "rawPath": "/api/cards",
      "method": "GET"
    },
    {
      // create
      "path": "/api/cards",
      "rawPath": "/api/cards",
      "method": "POST"
    },
    {
      // read
      "path": "/api/cards/:card_id",
      "rawPath": "/api/cards/:id",
      "method": "GET"
    },
    {
      // update
      "path": "/api/cards/:card_id",
      "rawPath": "/api/cards/:id",
      "method": "PUT"
    },
    {
      // destroy
      "path": "/api/cards/:card_id",
      "rawPath": "/api/cards/:id",
      "method": "DELETE"
    },
    // Move a card
    {
      "path": "/api/cards/:card_id/move",
      "rawPath": "/api/cards/:id/move",
      "method": "PUT"
    },
    // Add a Card to a Source Repo
    {
      "path": "/api/cards/:card_id/add_to_source",
      "rawPath": "/api/cards/:id/add_to_source",
      "method": "PUT"
    },
    // Card Relations
    {
      // index
      "path": "/api/card_relations",
      "rawPath": "/api/card_relations",
      "method": "GET"
    },
    {
      // create
      "path": "/api/card_relations",
      "rawPath": "/api/card_relations",
      "method": "POST"
    },
    {
      // delete
      "path": "/api/card_relations/:card_relation_id",
      "rawPath": "/api/card_relations/:id",
      "method": "DELETE"
    },
    // Card Comments
    {
      // index
      "path": "/api/cards/:card_id/comments",
      "rawPath": "/api/cards/:id/comments",
      "method": "GET"
    },
    {
      // create
      "path": "/api/cards/:card_id/comments",
      "rawPath": "/api/cards/:id/comments",
      "method": "POST"
    },
    {
      // update
      "path": "/api/cards/:card_id/comments/:comment_id",
      "rawPath": "/api/cards/:id/comments/:comment_id",
      "method": "PUT"
    },
    {
      // destroy
      "path": "/api/cards/:card_id/comments/:comment_id",
      "rawPath": "/api/cards/:id/comments/:comment_id",
      "method": "DELETE"
    },
    // Card Events
    {
      // index
      "path": "/api/cards/:card_id/events",
      "rawPath": "/api/cards/:id/events",
      "method": "GET"
    },
    // Card Commit References
    {
      // index
      "path": "/api/cards/:card_id/commit_references",
      "rawPath": "/api/cards/:id/commit_references",
      "method": "GET"
    },
    // Card Subscriptions
    {
      // index
      "path": "/api/cards/:card_id/subscriptions",
      "rawPath": "/api/cards/:id/subscriptions",
      "method": "GET"
    },
    {
      // create
      "path": "/api/cards/:card_id/subscriptions",
      "rawPath": "/api/cards/:id/subscriptions",
      "method": "POST"
    },
    {
      // Delete
      "path": "/api/cards/:card_id/subscriptions/:subscription_id",
      "rawPath": "/api/cards/:card_id/subscriptions/:id",
      "method": "DELETE"
    },
    // Card Tickets
    {
      // index
      "path": "/api/cards/:card_id/tickets",
      "rawPath": "/api/cards/:id/tickets",
      "method": "GET"
    },
    // Card Upvoters
    {
      // index
      "path": "/api/cards/:card_id/upvoters",
      "rawPath": "/api/cards/:id/upvoters",
      "method": "GET"
    },
    // Card Upvotes
    {
      // create
      "path": "/api/cards/:card_id/upvotes",
      "rawPath": "/api/cards/:id/upvotes",
      "method": "POST"
    },
  ],
  "epics": [
    // Cards
    {
      // index
      "path": "/api/epics/:epic_id/cards",
      "rawPath": "/api/epics/:id/cards",
      "method": "GET"
    },
    {
      // create
      "path": "/api/epics/:epic_id/cards",
      "rawPath": "/api/epics/:id/cards",
      "method": "POST"
    },
    {
      // destroy
      "path": "/api/epics/:epic_id/cards/:card_id",
      "rawPath": "/api/epics/:epic_id/cards/:id",
      "method": "POST"
    },
    // Epic Comments
    {
      // index
      "path": "/api/epics/:epic_id/comments",
      "rawPath": "/api/epics/:id/comments",
      "method": "GET"
    },
    {
      // create
      "path": "/api/epics/:epic_id/comments",
      "rawPath": "/api/epics/:id/comments",
      "method": "POST"
    },
    {
      // update
      "path": "/api/epics/:epic_id/comments/:comment_id",
      "rawpath": "/api/epics/:id/comments/:comment_id",
      "method": "PUT"
    },
    {
      // destroy
      "path": "/api/epics/:epic_id/comments/:comment_id",
      "rawPath": "/api/epics/:id/comments/:comment_id",
      "method": "DELETE"
    },
    // Epic Events
    {
      // index
      "path": "/api/epics/:epic_id/events",
      "rawPath": "/api/epics/:id/events",
      "method": "GET"
    },
    // Epic Subscriptions
    {
      // index
      "path": "/api/epics/:epic_id/subscriptions",
      "rawPath": "/api/epics/:id/subscriptions",
      "method": "GET"
    },
    {
      // create
      "path": "/api/epics/:epic_id/subscriptions",
      "rawPath": "/api/epics/:id/subscriptions",
      "method": "POST"
    },
    {
      // destroy
      "path": "/api/epics/:epic_id/subscriptions/:subscription_id",
      "rawPath": "/api/epics/:epic_id/subscriptions/:id",
      "method": "DELETE"
    },
  ],
  "notifications": [
    {
      // index
      "path": "/api/notifications",
      "rawPath": "/api/notifications",
      "method": "GET"
    },
    {
      // update
      "path": "/api/notifications/:_notificationId",
      "rawPath": "/api/notifications/:_id",
      "method": "PUT"
    },
    {
      // destroy
      "path": "/api/notifications/:_notificationId",
      "rawPath": "/api/notifications/:_id",
      "method": "DELETE"
    },
  ],
  "projects": [
    {
      // index
      "path": "/api/projects",
      "rawPath": "/api/projects",
      "method": "GET"
    },
    {
      // create
      "path": "/api/projects",
      "rawPath": "/api/projects",
      "method": "POST"
    },
    {
      // read
      "path": "/api/projects/:project_id",
      "rawPath": "/api/projects/:id",
      "method": "GET"
    },
    {
      // update
      "path": "/api/projects/:project_id",
      "rawPath": "/api/projects/:id",
      "method": "PUT"
    },
    {
      // destroy
      "path": "/api/projects/:project_id",
      "rawPath": "/api/projects/:id",
      "method": "DELETE"
    },
    // Project Admin Members
    {
      // index
      "path": "/api/projects/:project_id/admin_members",
      "rawPath": "/api/projects/:id/admin_members",
      "method": "GET"
    },
    {
      // create
      "path": "/api/projects/:project_id/admin_members/:person_id",
      "rawPath": "/api/projects/:id/admin_members/:person_id",
      "method": "POST"
    },
    {
      // destroy
      "path": "/api/projects/:project_id/admin_members/:person_id",
      "rawPath": "/api/projects/:id/admin_members/:person_id",
      "method": "DELETE"
    },
    // Project Members
    {
      // index
      "path": "/api/projects/:project_id/members",
      "rawPath": "/api/projects/:id/members",
      "method": "GET"
    },
    {
      // create
      "path": "/api/projects/:project_id/members",
      "rawPath": "/api/projects/:id/members",
      "method": "POST"
    },
    {
      // destroy
      "path": "/api/projects/:project_id/members/:person_id",
      "rawPath": "/api/projects/:id/members/:person_id",
      "method": "DELETE"
    },
    // Project Collaborators
    {
      "path": "/api/projects/:project_id/collaborators",
      "rawPath": "/api/projects/:id/collaborators",
      "method": "GET"
    },
    // Project Cards
    {
      // index
      "path": "/api/projects/:project_id/cards",
      "rawPath": "/api/projects/:id/cards",
      "method": "GET"
    },
    // Project Epics
    {
      // index
      "path": "/api/projects/:project_id/epics",
      "rawPath": "/api/projects/:id/epics",
      "method": "GET"
    },
    {
      // create
      "path": "/api/projects/:project_id/epics",
      "rawPath": "/api/projects/:id/epics",
      "method": "POST"
    },
    {
      // read
      "path": "/api/projects/:project_id/epics/:epic_id",
      "rawPath": "/api/projects/:id/epics/:epic_id",
      "method": "GET"
    },
    {
      // update
      "path": "/api/projects/:project_id/epics/:epic_id",
      "rawPath": "/api/projects/:id/epics/:epic_id",
      "method": "PUT"
    },
    // Labels
    {
      // index
      "path": "/api/projects/:project_id/labels",
      "rawPath": "/api/projects/:id/labels",
      "method": "GET"
    },
    {
      // create
      "path": "/api/projects/:project_id/labels",
      "rawPath": "/api/projects/:id/labels",
      "method": "POST"
    },
    {
      // read
      "path": "/api/projects/:project_id/labels/:label_id",
      "rawPath": "/api/projects/:id/labels/:label_id",
      "method": "GET"
    },
    {
      // update
      "path": "/api/projects/:project_id/labels/:label_id",
      "rawPath": "/api/projects/:id/labels/:label_id",
      "method": "PUT"
    },
    {
      // destroy
      "path": "/api/projects/:project_id/labels/:label_id",
      "rawPath": "/api/projects/:id/labels/:label_id",
      "method": "DELETE"
    },
    // Project Milestones
    {
      // index
      "path": "/api/projects/:project_id/milestones",
      "rawPath": "/api/projects/:id/milestones",
      "method": "GET"
    },
    // Project Tickets
    {
      // index
      "path": "/api/projects/:project_id/tickets",
      "rawPath": "/api/projects/:id/tickets",
      "method": "GET"
    },
    {
      // create
      "path": "/api/projects/:project_id/tickets",
      "rawPath": "/api/projects/:id/tickets",
      "method": "POST"
    },
    {
      // read
      "path": "/api/projects/:project_id/tickets/:ticket_id",
      "rawPath": "/api/projects/:id/tickets/:ticket_id",
      "method": "GET"
    },
    {
      // update
      "path": "/api/projects/:project_id/tickets/:ticket_id",
      "rawPath": "/api/projects/:id/tickets/:ticket_id",
      "method": "PUT"
    },
    // Project Power
    {
      // index
      "path": "/api/projects/:project_id/power",
      "rawPath": "/api/projects/:id/power",
      "method": "GET"
    },
  ],
  "sources": [
    {
      // index
      "path": "/api/sources",
      "rawPath": "/api/sources",
      "method": "GET"
    },
    {
      // destroy
      "path": "/api/sources/:source_id",
      "rawPath": "/api/sources/:id",
      "method": "DELETE"
    },
    // Source Collaborators
    {
      // index
      "path": "/api/sources/:source_id/collaborators",
      "rawPath": "/api/sources/:id/collaborators",
      "method": "GET"
    },
    // Source Milestones
    {
      // index
      "path": "/api/sources/:source_id/milestones",
      "rawPath": "/api/sources/:id/milestones",
      "method": "GET"
    },
    {
      // create
      "path": "/api/sources/:source_id/milestones",
      "rawPath": "/api/sources/:id/milestones",
      "method": "POST"
    },
    {
      // read
      "path": "/api/sources/:source_id/milestones/:milestone_id",
      "rawPath": "/api/sources/:id/milestones/:milestone_id",
      "method": "GET"
    },
    {
      // update
      "path": "/api/sources/:source_id/milestones/:milestone_id",
      "rawPath": "/api/sources/:id/milestones/:milestone_id",
      "method": "PUT"
    },
    {
      // destroy
      "path": "/api/sources/:source_id/milestones/:milestone_id",
      "rawPath": "/api/sources/:id/milestones/:milestone_id",
      "method": "DELETE"
    },
  ],
  "sprints": [
    // Sprint Events
    {
      // index
      "path": "/api/sprints/:sprint_id/events",
      "rawPath": "/api/sprints/:id/events",
      "method": "GET"
    },
  ],
  "tickets": [
    {
      // index
      "path": "/api/tickets",
      "rawPath": "/api/tickets",
      "method": "GET"
    },
    {
      // create
      "path": "/api/tickets",
      "rawPath": "/api/tickets",
      "method": "POST"
    },
    {
      // read
      "path": "/api/tickets/:ticket_id",
      "rawPath": "/api/tickets/:id",
      "method": "GET"
    },
    {
      // update
      "path": "/api/tickets/:ticket_id",
      "rawPath": "/api/tickets/:id",
      "method": "PUT"
    },
    // Ticket Cards
    {
      // index
      "path": "/api/tickets/:ticket_id/cards",
      "rawPath": "/api/tickets/:id/cards",
      "method": "GET"
    },
    {
      // create
      "path": "/api/tickets/:ticket_id/cards",
      "rawPath": "/api/tickets/:id/cards",
      "method": "POST"
    },
    {
      // destroy
      "path": "/api/tickets/:ticket_id/cards/:card_id",
      "rawPath": "/api/tickets/:ticket_id/cards/:id",
      "method": "DELETE"
    },
    // Ticket Comments
    {
      // index
      "path": "/api/tickets/:ticket_id/comments",
      "rawPath": "/api/tickets/:id/comments",
      "method": "GET"
    },
    {
      // create
      "path": "/api/tickets/:ticket_id/comments",
      "rawPath": "/api/tickets/:id/comments",
      "method": "POST"
    },
    {
      // update
      "path": "/api/tickets/:ticket_id/comments/:comment_id",
      "rawPath": "/api/tickets/:id/comments/:comment_id",
      "method": "PUT"
    },
    {
      // destroy
      "path": "/api/tickets/:ticket_id/comments/:comment_id",
      "rawPath": "/api/tickets/:id/comments/:comment_id",
      "method": "DELETE"
    },
    // Ticket Events
    {
      // index
      "path": "/api/tickets/:ticket_id/events",
      "rawPath": "/api/tickets/:id/events",
      "method": "GET"
    },
    // Subscriptions
    {
      // index
      "path": "/api/tickets/:ticket_id/subscriptions",
      "rawPath": "/api/tickets/:id/subscriptions",
      "method": "GET"
    },
    {
      // create
      "path": "/api/tickets/:ticket_id/subscriptions",
      "rawPath": "/api/tickets/:id/subscriptions",
      "method": "POST"
    },
    {
      // destroy
      "path": "/api/tickets/:ticket_id/subscriptions/:subscription_id",
      "rawPath": "/api/tickets/:ticket_id/subscriptions/:id",
      "method": "DELETE"
    },
  ],
  "users": [
    // Tokens
    {
      // create
      "path": "/api/users/:client_id/tokens",
      "rawPath": "/api/users/:client_id/tokens",
      "method": "POST"
    },
  ],
  "workspaces": [
    {
      // index
      "path": "/api/workspaces",
      "rawPath": "/api/workspaces",
      "method": "GET"
    },
    {
      // create
      "path": "/api/workspaces",
      "rawPath": "/api/workspaces",
      "method": "POST"
    },
    {
      // read
      "path": "/api/workspaces/:workspace_id",
      "rawPath": "/api/workspaces/:id",
      "method": "GET"
    },
    {
      // update
      "path": "/api/workspaces/:workspace_id",
      "rawPath": "/api/workspaces/:id",
      "method": "PUT"
    },
    {
      // destroy
      "path": "/api/workspaces/workspace_:id",
      "rawPath": "/api/workspaces/:id",
      "method": "DELETE"
    },
    // Workspace Categories
    {
      // index
      "path": "/api/workspaces/:workspace_id/categories",
      "rawPath": "/api/workspaces/:id/categories",
      "method": "GET"
    },
    {
      // read
      "path": "/api/workspaces/:workspace_id/categories/:_categoryId",
      "rawPath": "/api/workspaces/:id/categories/:_categoryId",
      "method": "GET"
    },
    {
      // index
      "path": "/api/workspaces/:workspace_id/categories_metadata",
      "rawPath": "/api/workspaces/:id/categories_metadata",
      "method": "GET"
    },
    {
      // read
      "path": "/api/workspaces/:workspace_id/categories_metadata/:_categoryId",
      "rawPath": "/api/workspaces/:id/categories_metadata/:_categoryId",
      "method": "GET"
    },
    // Workspace Sprints
    {
      // index
      "path": "/api/workspaces/:workspace_id/sprints",
      "rawPath": "/api/workspaces/:id/sprints",
      "method": "GET"
    },
    {
      // create
      "path": "/api/workspaces/:workspace_id/sprints",
      "rawPath": "/api/workspaces/:id/sprints",
      "method": "POST"
    },
    {
      // read
      "path": "/api/workspaces/:workspace_id/sprints/:sprint_id",
      "rawPath": "/api/workspaces/:id/sprints/:sprint_id",
      "method": "GET"
    },
    {
      // update
      "path": "/api/workspaces/:workspace_id/sprints/:sprint_id",
      "rawPath": "/api/workspaces/:id/sprints/:sprint_id",
      "method": "PUT"
    },
    {
      // destroy
      "path": "/api/workspaces/:workspace_id/sprints/:sprint_id",
      "rawPath": "/api/workspaces/:id/sprints/:sprint_id",
      "method": "DELETE"
    }
  ],
}
