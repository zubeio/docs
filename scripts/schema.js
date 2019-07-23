const sections = [
  {
    title: 'Accounts',
    desc: '',
    note: 'Zube Organizations are referred to as <code class="inline">accounts</code> in the Zube API.',
    tableGroups: [
      {
        table: 'accounts',
        endpoints: [
          // Accounts
          {
            // index
            method: 'GET',
            name: 'Get a list of accounts',
            path: '/api/accounts',
            rawPath: '/api/accounts',
          },
          {
            // read
            method: 'GET',
            name: 'Get an account',
            path: '/api/accounts/:account_id',
            rawPath: '/api/accounts/:id',
          }
        ]
      },
      {
      table: 'people',
      endpoints: [
          // Account Admin Members
          {
            // index
            path: '/api/accounts/:account_id/admin_members',
            rawPath: '/api/accounts/:id/admin_members',
            method: 'GET',
            name: 'Get a list of account admins'
          },
          {
            // create
            path: '/api/accounts/:account_id/admin_members',
            rawPath: '/api/accounts/:id/admin_members',
            method: 'POST',
            name: 'Create an account admin'
          },
          {
            // destroy
            path: '/api/accounts/:account_id/admin_members/:admin_member_id',
            rawPath: '/api/accounts/:id/admin_members/:person_id',
            method: 'DELETE',
            name: 'Remove an account admin'
          },
          // Account Members
          {
            // index
            path: '/api/accounts/:account_id/members',
            rawPath: '/api/accounts/:id/members',
            method: 'GET',
            name: 'Get a list of account memebers'
          },
          {
            // create
            path: '/api/accounts/:account_id/members',
            rawPath: '/api/accounts/:id/members',
            method: 'POST',
            name: 'Create an account member'
          },
          {
            // destroy
            path: '/api/accounts/:account_id/members/:member_id',
            rawPath: '/api/accounts/:id/members/:person_id',
            method: 'DELETE',
            name: 'Remove an account member'
          },
        ]
      },
      {
        table: 'projects',
        endpoints: [
          // Account Projects
          {
            // index
            path: '/api/accounts/:account_id/projects',
            rawPath: '/api/accounts/:id/projects',
            method: 'GET',
            name: 'Get a list of projects for an account'
          },
        ]
      }
    ]
  },
  {
    title: 'Cards',
    desc: '',
    tableGroups: [
      {
        // Cards
        table: 'cards',
        endpoints: [
          {
            // index
            path: '/api/cards',
            rawPath: '/api/cards',
            method: 'GET',
            name: 'Get a list of cards'
          },
          {
            // create
            path: '/api/cards',
            rawPath: '/api/cards',
            method: 'POST',
            name: 'Create a card'
          },
          {
            // read
            path: '/api/cards/:card_id',
            rawPath: '/api/cards/:id',
            method: 'GET',
            name: 'Get a card'
          },
          {
            // update
            path: '/api/cards/:card_id',
            rawPath: '/api/cards/:id',
            method: 'PUT',
            name: 'Update a card'
          },
          {
            // archive
            path: '/api/cards/:card_id/archive',
            rawPath: '/api/cards/:id/archive',
            method: 'PUT',
            name: 'Archive a card',
          },
          {
            // Move
            path: '/api/cards/:card_id/move',
            rawPath: '/api/cards/:id/move',
            method: 'PUT',
            name: 'Move a card',
          },
          {
            // Add a Card to a Source Repo
            path: '/api/cards/:card_id/add_to_source',
            rawPath: '/api/cards/:id/add_to_source',
            method: 'PUT',
            name: 'Add a card to a source repo'
          },
        ]
      },
      {
        table: 'card_relations',
        endpoints: [
          // Card Relations
          {
            // index
            path: '/api/card_relations',
            rawPath: '/api/card_relations',
            method: 'GET',
            name: 'Get a list of card relations'
          },
          {
            // create
            path: '/api/card_relations',
            rawPath: '/api/card_relations',
            method: 'POST',
            name: 'Create a card relationship'
          },
          {
            // delete
            path: '/api/card_relations/:card_relation_id',
            rawPath: '/api/card_relations/:id',
            method: 'DELETE',
            name: 'Remove a card relationship'
          },
        ]
      },
      {
        table: 'comments',
        desc: 'Comments for cards.',
        endpoints: [
          // Card Comments
          {
            // index
            path: '/api/cards/:card_id/comments',
            rawPath: '/api/cards/:id/comments',
            method: 'GET',
            name: 'Get a list of card comments'
          },
          {
            // create
            path: '/api/cards/:card_id/comments',
            rawPath: '/api/cards/:id/comments',
            method: 'POST',
            name: 'Create a new card comment'
          },
          {
            // update
            path: '/api/cards/:card_id/comments/:comment_id',
            rawPath: '/api/cards/:id/comments/:comment_id',
            method: 'PUT',
            name: 'Update a card comment'
          },
          {
            // destroy
            path: '/api/cards/:card_id/comments/:comment_id',
            rawPath: '/api/cards/:id/comments/:comment_id',
            method: 'DELETE',
            name: 'Remove a card comment'
          },
        ]
      },
      {
        table: 'events',
        endpoints: [
          // Card Events
          {
            // index
            path: '/api/cards/:card_id/events',
            rawPath: '/api/cards/:id/events',
            method: 'GET',
            name: 'Get a list of card events'
          },
        ]
      },
      {
        table: 'commits',
        endpoints: [
          {
            // index
            path: '/api/cards/:card_id/commit_references',
            rawPath: '/api/cards/:id/commit_references',
            method: 'GET',
            name: 'Get a list of commit references'
          },
        ]
      },
      {
        table: 'cards_users_subscriptions',
        endpoints: [
          {
            // index
            path: '/api/cards/:card_id/subscriptions',
            rawPath: '/api/cards/:id/subscriptions',
            method: 'GET',
            name: 'Get a list of card subscriptions'
          },
          {
            // create
            path: '/api/cards/:card_id/subscriptions',
            rawPath: '/api/cards/:id/subscriptions',
            method: 'POST',
            name: 'Create a card subscription'
          },
          {
            // Delete
            path: '/api/cards/:card_id/subscriptions/:subscription_id',
            rawPath: '/api/cards/:card_id/subscriptions/:id',
            method: 'DELETE',
            name: 'Remove a card subscription'
          },
        ]
      },
      {
        table: 'cards_tickets',
        endpoints: [
          // Card Tickets
          {
            // index
            path: '/api/cards/:card_id/tickets',
            rawPath: '/api/cards/:id/tickets',
            method: 'GET',
            name: 'Get a list of related tickets'
          },
        ]
      },
      {
        table: 'people',
        endpoints: [
          // Card Upvoters
          {
            // index
            path: '/api/cards/:card_id/upvoters',
            rawPath: '/api/cards/:id/upvoters',
            method: 'GET',
            name: 'Get a list of upvoters'
          },
        ]
      },
      {
        table: 'upvotes',
        endpoints: [
          // Card Upvotes
          {
            // create
            path: '/api/cards/:card_id/upvotes',
            rawPath: '/api/cards/:id/upvotes',
            method: 'POST',
            name: 'Create a card upvote'
          },
        ]
      }
    ]
  },
  {
    title: 'Epics',
    desc: '',
    tableGroups: [
      // Cards
      {
        table: 'cards',
        endpoints: [
          {
            // index
            name: 'Get a list of epic cards',
            path: '/api/epics/:epic_id/cards',
            rawPath: '/api/epics/:id/cards',
            method: 'GET'
          },
          {
            // create
            name: 'Add a card to an epic',
            path: '/api/epics/:epic_id/cards',
            rawPath: '/api/epics/:id/cards',
            method: 'POST'
          },
          {
            // destroy
            name: 'Remove a card from an epic',
            path: '/api/epics/:epic_id/cards/:card_id',
            rawPath: '/api/epics/:id/cards/:card_id',
            method: 'DELETE'
          },
        ]
      },
      // Epic Comments
      {
        table: 'epic_comments',
        endpoints: [
          {
            // index
            name: 'Get a list of epic comments',
            path: '/api/epics/:epic_id/comments',
            rawPath: '/api/epics/:id/comments',
            method: 'GET'
          },
          {
            // create
            name: 'Create an epic comment',
            path: '/api/epics/:epic_id/comments',
            rawPath: '/api/epics/:id/comments',
            method: 'POST'
          },
          {
            // update
            name: 'Update an epic comment',
            path: '/api/epics/:epic_id/comments/:comment_id',
            rawPath: '/api/epics/:id/comments/:comment_id',
            method: 'PUT'
          },
          {
            // destroy
            name: 'Remove an epic comment',
            path: '/api/epics/:epic_id/comments/:comment_id',
            rawPath: '/api/epics/:id/comments/:comment_id',
            method: 'DELETE'
          },
        ]
      },
      // Epic Events
      {
        table: 'events',
        endpoints: [
          {
            // index
            name: 'Get a list of epic events',
            path: '/api/epics/:epic_id/events',
            rawPath: '/api/epics/:id/events',
            method: 'GET'
          },
        ]
      },
      // Epic Subscriptions
      {
        table: 'epics_users_subscriptions',
        endpoints: [
          {
            // index
            name: 'Get a list of epic subscriptions',
            path: '/api/epics/:epic_id/subscriptions',
            rawPath: '/api/epics/:id/subscriptions',
            method: 'GET'
          },
          {
            // create
            name: 'Create an epic subscription',
            path: '/api/epics/:epic_id/subscriptions',
            rawPath: '/api/epics/:id/subscriptions',
            method: 'POST'
          },
          {
            // destroy
            name: 'Remove an epic subscription',
            path: '/api/epics/:epic_id/subscriptions/:subscription_id',
            rawPath: '/api/epics/:epic_id/subscriptions/:id',
            method: 'DELETE'
          },
        ]
      }
    ]
  },
  // TODO Notification attrs are not in the cobalt document
  {
    title: 'Notifications',
    desc: '',
    tableGroups: [
      {
        table: 'notifications',
        note: 'Notifications use ObjectIds.',
        endpoints: [
          {
            // index
            name: 'Get a list of notifications',
            path: '/api/notifications',
            rawPath: '/api/notifications',
            method: 'GET'
          },
          {
            // update
            name: 'Update a notification',
            path: '/api/notifications/:_notificationId',
            rawPath: '/api/notifications/:_id',
            method: 'PUT'
          },
          {
            // destroy
            name: 'Delete a notification',
            path: '/api/notifications/:_notificationId',
            rawPath: '/api/notifications/:_id',
            method: 'DELETE'
          },
        ]
      }
    ]
  },
  {
    title: 'Projects',
    desc: '',
    tableGroups: [
      {
        table: 'projects',
        endpoints: [
          {
            // index
            name: 'Get a list of projects',
            path: '/api/projects',
            rawPath: '/api/projects',
            method: 'GET'
          },
          {
            // create
            name: 'Create a project',
            path: '/api/projects',
            rawPath: '/api/projects',
            method: 'POST'
          },
          {
            // read
            name: 'Get a project',
            path: '/api/projects/:project_id',
            rawPath: '/api/projects/:id',
            method: 'GET'
          },
          {
            // update
            name: 'Update a project',
            path: '/api/projects/:project_id',
            rawPath: '/api/projects/:id',
            method: 'PUT'
          },
          {
            // destroy
            name: 'Delete a project',
            path: '/api/projects/:project_id',
            rawPath: '/api/projects/:id',
            method: 'DELETE'
          },
        ]
      },
      {
        table: 'people',
        endpoints: [
          // Project Admin Members
          {
            // index
            name: 'Get a list of project admins',
            path: '/api/projects/:project_id/admin_members',
            rawPath: '/api/projects/:id/admin_members',
            method: 'GET'
          },
          {
            // create
            name: 'Add a project admin',
            path: '/api/projects/:project_id/admin_members/:person_id',
            rawPath: '/api/projects/:id/admin_members',
            method: 'POST'
          },
          {
            // destroy
            name: 'Remove a project admin',
            path: '/api/projects/:project_id/admin_members/:person_id',
            rawPath: '/api/projects/:id/admin_members/:person_id',
            method: 'DELETE'
          },
          // Project Members
          {
            // index
            name: 'Get a list of project members',
            path: '/api/projects/:project_id/members',
            rawPath: '/api/projects/:id/members',
            method: 'GET'
          },
          {
            // create
            name: 'Add a project member',
            path: '/api/projects/:project_id/members',
            rawPath: '/api/projects/:id/members',
            method: 'POST'
          },
          {
            // destroy
            name: 'Remove a project member',
            path: '/api/projects/:project_id/members/:person_id',
            rawPath: '/api/projects/:id/members/:person_id',
            method: 'DELETE'
          },
          // Project Collaborators
          {
            name: 'Get a list of project collaborators',
            path: '/api/projects/:project_id/collaborators',
            rawPath: '/api/projects/:id/collaborators',
            method: 'GET',
          },
        ]
      },
      {
        table: 'cards',
        endpoints: [
          // Project Cards
          {
            // index
            name: 'Get a list of cards',
            path: '/api/projects/:project_id/cards',
            rawPath: '/api/projects/:id/cards',
            method: 'GET'
          },
          {
            // triage
            name: 'Get a list of cards in triage',
            path: '/api/projects/:project_id/triage_cards',
            rawPath: '/api/projects/:id/triage_cards',
            method: 'GET'
          },
        ]
      },
      {
        table: 'epics',
        endpoints: [
          // Project Epics
          {
            // index
            name: 'Get a list of epics',
            path: '/api/projects/:project_id/epics',
            rawPath: '/api/projects/:id/epics',
            method: 'GET'
          },
          {
            // create
            name: 'Create an epic',
            path: '/api/projects/:project_id/epics',
            rawPath: '/api/projects/:id/epics',
            method: 'POST'
          },
          {
            // read
            name: 'Get an epic',
            path: '/api/projects/:project_id/epics/:epic_id',
            rawPath: '/api/projects/:id/epics/:epic_id',
            method: 'GET'
          },
          {
            // update
            name: 'Update an epic',
            path: '/api/projects/:project_id/epics/:epic_id',
            rawPath: '/api/projects/:id/epics/:epic_id',
            method: 'PUT'
          },
        ]
      },
      {
        table: 'labels',
        endpoints: [
          // Labels
          {
            // index
            name: 'Get a list of labels',
            path: '/api/projects/:project_id/labels',
            rawPath: '/api/projects/:id/labels',
            method: 'GET'
          },
          {
            // create
            name: 'Create a label',
            path: '/api/projects/:project_id/labels',
            rawPath: '/api/projects/:id/labels',
            method: 'POST'
          },
          {
            // read
            name: 'Get a label',
            path: '/api/projects/:project_id/labels/:label_id',
            rawPath: '/api/projects/:id/labels/:label_id',
            method: 'GET'
          },
          {
            // update
            name: 'Update a label',
            path: '/api/projects/:project_id/labels/:label_id',
            rawPath: '/api/projects/:id/labels/:label_id',
            method: 'PUT'
          },
          {
            // destroy
            name: 'Delete a label',
            path: '/api/projects/:project_id/labels/:label_id',
            rawPath: '/api/projects/:id/labels/:label_id',
            method: 'DELETE'
          },
        ]
      },
      {
        table: 'milestones',
        endpoints: [
          // Project Milestones
          {
            // index
            name: 'Get a list of milestones',
            path: '/api/projects/:project_id/milestones',
            rawPath: '/api/projects/:id/milestones',
            method: 'GET'
          },
        ]
      },
      {
        table: 'tickets',
        endpoints: [
          // Project Tickets
          {
            // index
            name: 'Get a list of tickets',
            path: '/api/projects/:project_id/tickets',
            rawPath: '/api/projects/:id/tickets',
            method: 'GET'
          },
          {
            // create
            name: 'Create a ticket',
            path: '/api/projects/:project_id/tickets',
            rawPath: '/api/projects/:id/tickets',
            method: 'POST'
          },
          {
            // read
            name: 'Get a ticket',
            path: '/api/projects/:project_id/tickets/:ticket_id',
            rawPath: '/api/projects/:id/tickets/:ticket_id',
            method: 'GET'
          },
          {
            // update
            name: 'Update a ticket',
            path: '/api/projects/:project_id/tickets/:ticket_id',
            rawPath: '/api/projects/:id/tickets/:ticket_id',
            method: 'PUT'
          },
        ]
      }
    ]
  },
  {
    title: 'Sources',
    desc: '',
    tableGroups: [
      {
        table: 'sources',
        endpoints: [
          {
            // index
            name: 'Get a list of sources',
            path: '/api/sources',
            rawPath: '/api/sources',
            method: 'GET'
          },
          {
            // destroy
            name: 'Remove a source',
            path: '/api/sources/:source_id',
            rawPath: '/api/sources/:id',
            method: 'DELETE'
          },
        ]
      },
      {
        table: 'people',
        endpoints: [
          // Source Collaborators
          {
            // index
            name: 'Get a list of source collaborators',
            path: '/api/sources/:source_id/collaborators',
            rawPath: '/api/sources/:id/collaborators',
            method: 'GET'
          },
        ]
      },
      {
        table: 'milestones',
        endpoints: [
          // Source Milestones
          {
            // index
            name: 'Get a list of milestones',
            path: '/api/sources/:source_id/milestones',
            rawPath: '/api/sources/:id/milestones',
            method: 'GET'
          },
          {
            // create
            name: 'Create a milestone',
            path: '/api/sources/:source_id/milestones',
            rawPath: '/api/sources/:id/milestones',
            method: 'POST'
          },
          {
            // read
            name: 'Get a milestone',
            path: '/api/sources/:source_id/milestones/:milestone_id',
            rawPath: '/api/sources/:id/milestones/:milestone_id',
            method: 'GET'
          },
          {
            // update
            name: 'Update a milestone',
            path: '/api/sources/:source_id/milestones/:milestone_id',
            rawPath: '/api/sources/:id/milestones/:milestone_id',
            method: 'PUT'
          },
          {
            // destroy
            name: 'Delete a milestone',
            path: '/api/sources/:source_id/milestones/:milestone_id',
            rawPath: '/api/sources/:id/milestones/:milestone_id',
            method: 'DELETE'
          },
        ]
      }
    ]
  },
  {
    title: 'Sprints',
    desc: '',
    tableGroups: [
      {
        table: 'events',
        endpoints: [
          {
            // index
            name: 'Get a list of events',
            path: '/api/sprints/:sprint_id/events',
            rawPath: '/api/sprints/:id/events',
            method: 'GET'
          },
        ]
      }
    ]
  },
  {
    title: 'Tickets',
    desc: '',
    tableGroups: [
      {
        table: 'cards',
        endpoints: [
          // Ticket Cards
          {
            // index
            name: 'Get a list of cards',
            path: '/api/tickets/:ticket_id/cards',
            rawPath: '/api/tickets/:id/cards',
            method: 'GET'
          },
          {
            // create
            name: 'Add a card to a ticket',
            path: '/api/tickets/:ticket_id/cards',
            rawPath: '/api/tickets/:id/cards',
            method: 'POST'
          },
          {
            // destroy
            name: 'Remove a card from a ticket',
            path: '/api/tickets/:ticket_id/cards/:card_id',
            rawPath: '/api/tickets/:id/cards/:card_id',
            method: 'DELETE'
          },
        ]
      },
      {
        table: 'tickets_comments',
        endpoints: [
          // Ticket Comments
          {
            // index
            name: 'Get a list of ticket comments',
            path: '/api/tickets/:ticket_id/comments',
            rawPath: '/api/tickets/:id/comments',
            method: 'GET'
          },
          {
            // create
            name: 'Create a ticket comment',
            path: '/api/tickets/:ticket_id/comments',
            rawPath: '/api/tickets/:id/comments',
            method: 'POST'
          },
          {
            // update
            name: 'Update a ticket comment',
            path: '/api/tickets/:ticket_id/comments/:comment_id',
            rawPath: '/api/tickets/:id/comments/:comment_id',
            method: 'PUT'
          },
          {
            // destroy
            name: 'Delete a ticket comment',
            path: '/api/tickets/:ticket_id/comments/:comment_id',
            rawPath: '/api/tickets/:id/comments/:comment_id',
            method: 'DELETE'
          },
        ]
      },
      {
        table: 'events',
        endpoints: [
          // Ticket Events
          {
            // index
            name: 'Get a list of ticket events',
            path: '/api/tickets/:ticket_id/events',
            rawPath: '/api/tickets/:id/events',
            method: 'GET'
          },
        ]
      },
      {
        table: 'tickets_users_subscriptions',
        endpoints: [
          // Subscriptions
          {
            // index
            name: 'Get a list of ticket subscriptions',
            path: '/api/tickets/:ticket_id/subscriptions',
            rawPath: '/api/tickets/:id/subscriptions',
            method: 'GET'
          },
          {
            // create
            name: 'Create a ticket subscription',
            path: '/api/tickets/:ticket_id/subscriptions',
            rawPath: '/api/tickets/:id/subscriptions',
            method: 'POST'
          },
          {
            // destroy
            name: 'Delete a ticket subscription',
            path: '/api/tickets/:ticket_id/subscriptions/:subscription_id',
            rawPath: '/api/tickets/:ticket_id/subscriptions/:id',
            method: 'DELETE'
          },
        ]
      }
    ]
  },
  {
    title: 'Users',
    desc: '',
    tableGroups: [
      {
        table: null,
        endpoints: [
          {
            // create
            name: 'Get an API token',
            path: '/api/users/:client_id/tokens',
            rawPath: '/api/users/:client_id/tokens',
            method: 'POST',
          },
        ]
      }
    ]
  },
  {
    title: 'Workspaces',
    desc: '',
    tableGroups: [
      {
        table: 'workspaces',
        endpoints: [
          {
            // index
            name: 'Get a list of workspaces',
            path: '/api/workspaces',
            rawPath: '/api/workspaces',
            method: 'GET'
          },
          {
            // create
            name: 'Create a workspace',
            path: '/api/workspaces',
            rawPath: '/api/workspaces',
            method: 'POST'
          },
          {
            // read
            name: 'Get a workspace',
            path: '/api/workspaces/:workspace_id',
            rawPath: '/api/workspaces/:id',
            method: 'GET'
          },
          {
            // update
            name: 'Update a workspace',
            path: '/api/workspaces/:workspace_id',
            rawPath: '/api/workspaces/:id',
            method: 'PUT'
          },
          {
            // destroy
            name: 'Delete a workspace',
            path: '/api/workspaces/workspace_:id',
            rawPath: '/api/workspaces/:id',
            method: 'DELETE'
          },
        ]
      },
      {
        table: 'categories',
        note: 'Categories use ObjectIds.',
        endpoints: [
          // Workspace Categories
          {
            // index
            name: 'Get a list of categories',
            path: '/api/workspaces/:workspace_id/categories',
            rawPath: '/api/workspaces/:id/categories',
            method: 'GET'
          },
          {
            // read
            name: 'Get a category',
            path: '/api/workspaces/:workspace_id/categories/:_categoryId',
            rawPath: '/api/workspaces/:id/categories/:_categoryId',
            method: 'GET'
          },
          {
            // index
            name: 'Get a list of categories metadata',
            path: '/api/workspaces/:workspace_id/categories_metadata',
            rawPath: '/api/workspaces/:id/categories_metadata',
            method: 'GET',
            note: 'Returns a list of information for a category without it\'s list of cards.'
          },
          {
            // read
            name: 'Get a category\'s metadata',
            path: '/api/workspaces/:workspace_id/categories_metadata/:_categoryId',
            rawPath: '/api/workspaces/:id/categories_metadata/:_categoryId',
            method: 'GET',
            note: 'Returns a single category without it\'s list of cards.'
          },
        ]
      },
      {
        table: 'sprints',
        endpoints: [
          // Workspace Sprints
          {
            // index
            name: 'Get a list of sprints',
            path: '/api/workspaces/:workspace_id/sprints',
            rawPath: '/api/workspaces/:id/sprints',
            method: 'GET'
          },
          {
            // create
            name: 'Create a sprint',
            path: '/api/workspaces/:workspace_id/sprints',
            rawPath: '/api/workspaces/:id/sprints',
            method: 'POST'
          },
          {
            // read
            name: 'Get a sprint',
            path: '/api/workspaces/:workspace_id/sprints/:sprint_id',
            rawPath: '/api/workspaces/:id/sprints/:sprint_id',
            method: 'GET'
          },
          {
            // update
            name: 'Update a sprint',
            path: '/api/workspaces/:workspace_id/sprints/:sprint_id',
            rawPath: '/api/workspaces/:id/sprints/:sprint_id',
            method: 'PUT'
          },
          {
            // destroy
            name: 'Delete a sprint',
            path: '/api/workspaces/:workspace_id/sprints/:sprint_id',
            rawPath: '/api/workspaces/:id/sprints/:sprint_id',
            method: 'DELETE'
          }
        ]
      }
    ]
  }
];

module.exports = sections;
