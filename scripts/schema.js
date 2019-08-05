const sections = [
  {
    title: 'Accounts',
    note: 'Zube Organizations are referred to as <code class="inline">accounts</code> in the Zube API.',
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
      },
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
        name: 'Create an account admin',
        formData: [
          { name: 'person_id', type: 'Integer', isRequired: true },
        ]
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
        name: 'Create an account member',
        formData: [
          { name: 'person_id', type: 'Integer', isRequired: true },
        ]
      },
      {
        // destroy
        path: '/api/accounts/:account_id/members/:member_id',
        rawPath: '/api/accounts/:id/members/:person_id',
        method: 'DELETE',
        name: 'Remove an account member'
      },
      // Account Projects
      {
        // index
        path: '/api/accounts/:account_id/projects',
        rawPath: '/api/accounts/:id/projects',
        method: 'GET',
        name: 'Get a list of projects for an account'
      },
    ]
  },
  {
    title: 'Cards',
    desc: '',
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
        name: 'Create a card',
        formData: [
          { name: 'title', type: 'String', isRequired: true },
          { name: 'project_id', type: 'Integer', isRequired: true },
          { name: 'sprint_id', type: 'Integer', isRequired: false },
          { name: 'github_issue.source_id', type: 'Integer', isRequired: false, note: 'Required if <code class="inline">github_issue<code class="inline"> object is sent' },
          { name: 'github_issue.milestone_id', type: 'Integer', isRequired: false },
          { name: 'workspace_id', type: 'Integer', isRequired: false },
          { name: 'category_name', type: 'String', isRequired: false },
          { name: 'body', type: 'Text', isRequired: false },
          { name: 'labels', type: 'Array', isRequired: false, note: 'Array of label objects' },
          { name: 'assignees', type: 'Array', isRequired: false, note: 'Array of assignee objects with key <code class="inline">id</code>' },
          { name: 'points', type: 'Number', isRequired: false },
          { name: 'priority', type: 'Integer', isRequired: false, note: 'Must be one of <code class="inline">1</code>, <code class="inline">2</code>, <code class="inline">3</code>, <code class="inline">4</code>, <code class="inline">5</code>, or <code class="inline">null</code>' },
          { name: 'epic_id', type: 'Integer', isRequired: false },
        ]
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
        name: 'Update a card',
        formData: [
          { name: 'title', type: 'String', isRequired: true },
          { name: 'body', type: 'Text', isRequired: true },
          { name: 'labels', type: 'Array', isRequired: true, note: 'Array of label objects; see <a href="#labels">Labels</a>' },
          { name: 'assignees', type: 'Array', isRequired: true, note: 'Array of assignee objects with key <code class="inline">id</code>' },
          { name: 'state', type: 'String', isRequired: true, note: 'Only accepts <code class="inline">open</code> or <code class="inline">closed</code>' },
          { name: 'sprint_id', type: 'Integer', isRequired: true },
          { name: 'project_id', type: 'Integer', isRequired: true },
          { name: 'workspace_id', type: 'Integer', isRequired: true },
          { name: 'points', type: 'Number', isRequired: true },
          { name: 'priority', type: 'Integer', isRequired: true,  note: 'Must be one of <code class="inline">1</code>, <code class="inline">2</code>, <code class="inline">3</code>, <code class="inline">4</code>, <code class="inline">5</code>, or <code class="inline">null</code>' },
          { name: 'epic_id', type: 'Integer', isRequired: true },
          { name: 'github_issue.milestone_id', type: 'Integer', isRequired: true },
        ]
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
        note: 'XXX',
        formData: [
          { name: 'destination.position', type: 'Integer', isRequired: true },
          { name: 'destination.type', type: 'String', isRequired: true, note: 'Only accepts <code class="inline">category</code> or <code class="inline">project</code>' },
          { name: 'destination.name', type: 'Integer', isRequired: false, note: 'Name of the destination category.' },
          { name: 'destination.workspace_id', type: 'Integer', isRequired: false, note: 'Required if sending <code class="inline">destination.type</code> as <code class="inline">category</code>' },
        ]
      },
      {
        // Add a Card to a Source Repo
        path: '/api/cards/:card_id/add_to_source',
        rawPath: '/api/cards/:id/add_to_source',
        method: 'PUT',
        name: 'Add a card to a source repo',
        formData: [
          { name: 'new_source_id', type: 'Integer', isRequired: true, note: 'You cannot change the source for a card that already has a source' },
        ]
      },
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
        name: 'Create a card relationship',
        formData: [
          { name: 'card_id', type: 'Integer', isRequired: true },
          { name: 'linked_card_id', type: 'Integer', isRequired: true },
        ]
      },
      {
        // delete
        path: '/api/card_relations/:card_relation_id',
        rawPath: '/api/card_relations/:id',
        method: 'DELETE',
        name: 'Remove a card relationship'
      },
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
        name: 'Create a new card comment',
        formData: [
          { name: 'body', type: 'Text', isRequired: true },
        ]
      },
      {
        // update
        path: '/api/cards/:card_id/comments/:comment_id',
        rawPath: '/api/cards/:id/comments/:comment_id',
        method: 'PUT',
        name: 'Update a card comment',
        formData: [
          { name: 'body', type: 'Text', isRequired: true },
        ]
      },
      {
        // destroy
        path: '/api/cards/:card_id/comments/:comment_id',
        rawPath: '/api/cards/:id/comments/:comment_id',
        method: 'DELETE',
        name: 'Remove a card comment'
      },
      // Card Events
      {
        // index
        path: '/api/cards/:card_id/events',
        rawPath: '/api/cards/:id/events',
        method: 'GET',
        name: 'Get a list of card events'
      },
      {
        // index
        path: '/api/cards/:card_id/commit_references',
        rawPath: '/api/cards/:id/commit_references',
        method: 'GET',
        name: 'Get a list of commit references'
      },
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
        name: 'Create a card subscription',
      },
      {
        // Delete
        path: '/api/cards/:card_id/subscriptions/:subscription_id',
        rawPath: '/api/cards/:card_id/subscriptions/:id',
        method: 'DELETE',
        name: 'Remove a card subscription'
      },
      // Card Tickets
      {
        // index
        path: '/api/cards/:card_id/tickets',
        rawPath: '/api/cards/:id/tickets',
        method: 'GET',
        name: 'Get a list of related tickets'
      },
      // Card Upvoters
      {
        // index
        path: '/api/cards/:card_id/upvoters',
        rawPath: '/api/cards/:id/upvoters',
        method: 'GET',
        name: 'Get a list of upvoters'
      },
      // Card Upvotes
      {
        // create
        path: '/api/cards/:card_id/upvotes',
        rawPath: '/api/cards/:id/upvotes',
        method: 'POST',
        name: 'Create a card upvote'
      },
    ]
  },
  {
    title: 'Categories',
    desc: '',
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
    title: 'Epics',
    desc: '',
    endpoints: [
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
        method: 'POST',
        formData: [
          { name: 'title', type: 'String', isRequired: true },
          { name: 'description', type: 'Text', isRequired: false },
          { name: 'assignee_id', type: 'Integer', isRequired: false },
          { name: 'due_on', type: 'Timestamp', isRequired: false },
          { name: 'track_cards', type: 'Boolean', isRequired: false },
          { name: 'color', type: 'String', isRequired: false, note: 'Hex color code string without preceding "#"' },
        ]
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
        method: 'PUT',
        formData: [
          { name: 'title', type: 'String', isRequired: true },
          { name: 'description', type: 'Text', isRequired: true },
          { name: 'assignee_id', type: 'Integer', isRequired: true },
          { name: 'due_on', type: 'Timestamp', isRequired: true },
          { name: 'track_cards', type: 'Boolean', isRequired: true },
          { name: 'state', type: 'String', isRequired: true, note: 'Only accepts <code class="inline">open</code> or <code class="inline">closed</code>' },
          { name: 'status', type: 'String', isRequired: true, note: 'Must be one of <code class="inline">new</code>, <code class="inline">queued</code>, <code class="inline">in_progress</code>, <code class="inline">completed</code>, <code class="inline">closed</code>, or <code class="inline">archived</code>' },
          { name: 'color', type: 'String', isRequired: true, note: 'Hex color code string without preceding "#"' },
        ]
      },
      // Epic Cards
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
        method: 'POST',
        formData: [
          { name: 'card_id', type: 'Integer', isRequired: true },
        ]
      },
      {
        // destroy
        name: 'Remove a card from an epic',
        path: '/api/epics/:epic_id/cards/:card_id',
        rawPath: '/api/epics/:id/cards/:card_id',
        method: 'DELETE'
      },
      // Epic Comments
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
        method: 'POST',
        formData: [
          { name: 'body', type: 'Text', isRequired: true },
        ]
      },
      {
        // update
        name: 'Update an epic comment',
        path: '/api/epics/:epic_id/comments/:comment_id',
        rawPath: '/api/epics/:id/comments/:comment_id',
        method: 'PUT',
        formData: [
          { name: 'body', type: 'Text', isRequired: true },
        ]
      },
      {
        // destroy
        name: 'Remove an epic comment',
        path: '/api/epics/:epic_id/comments/:comment_id',
        rawPath: '/api/epics/:id/comments/:comment_id',
        method: 'DELETE'
      },
      // Epic Events
      {
        // index
        name: 'Get a list of epic events',
        path: '/api/epics/:epic_id/events',
        rawPath: '/api/epics/:id/events',
        method: 'GET'
      },
      // Epic Subscriptions
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
  },
  {
    title: 'Labels',
    desc: '',
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
        method: 'POST',
        formData: [
          { name: 'name', type: 'String', isRequired: true },
          { name: 'color', type: 'String', isRequired: true, note: 'Hex color code string without preceding "#"' },
        ]
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
        method: 'PUT',
        formData: [
          { name: 'name', type: 'String', isRequired: true },
          { name: 'color', type: 'String', isRequired: true, note: 'Hex color code string without preceding "#"' },
        ]
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
    title: 'Notifications',
    desc: '',
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
        method: 'PUT',
        formData: [
          { name: 'read', type: 'Boolean', isRequired: true },
        ]
      },
      {
        // destroy
        name: 'Delete a notification',
        path: '/api/notifications/:_notificationId',
        rawPath: '/api/notifications/:_id',
        method: 'DELETE'
      },
    ]
  },
  {
    title: 'Projects',
    desc: '',
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
        method: 'POST',
        formData: [
          { name: 'account_id', type: 'Integer', isRequired: true },
          { name: 'name', type: 'String', isRequired: true },
          { name: 'description', type: 'String', isRequired: false },
        ]
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
        method: 'PUT',
        formData: [
          { name: 'name', type: 'String', isRequired: true },
          { name: 'description', type: 'String', isRequired: false },
          { name: 'triage', type: 'Boolean', isRequired: false, note: 'Only valid for projects with one workspace' },
        ]
      },
      {
        // destroy
        name: 'Delete a project',
        path: '/api/projects/:project_id',
        rawPath: '/api/projects/:id',
        method: 'DELETE'
      },
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
        method: 'POST',
        formData: [
          { name: 'person_id', type: 'Integer', isRequired: true },
        ]
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
        method: 'POST',
        formData: [
          { name: 'person_id', type: 'Integer', isRequired: true },
        ]
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
      // Milestones
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
    title: 'Sprints',
    desc: '',
    endpoints: [
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
        method: 'POST',
        formData: [
          { name: 'title', type: 'String', isRequired: true },
          { name: 'start_date', type: 'Timestamp', isRequired: true },
          { name: 'end_date', type: 'Timestamp', isRequired: true },
          { name: 'description', type: 'Text', isRequired: false },
        ]
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
        method: 'PUT',
        formData: [
          { name: 'title', type: 'String', isRequired: true },
          { name: 'start_date', type: 'Timestamp', isRequired: true },
          { name: 'end_date', type: 'Timestamp', isRequired: true },
          { name: 'description', type: 'Text', isRequired: true },
          { name: 'state', type: 'String', isRequired: true, note: 'Only accepts <code class="inline">open</code> or <code class="inline">closed</code>' },
        ]
      },
      {
        // destroy
        name: 'Delete a sprint',
        path: '/api/workspaces/:workspace_id/sprints/:sprint_id',
        rawPath: '/api/workspaces/:id/sprints/:sprint_id',
        method: 'DELETE'
      },
      {
        // index
        name: 'Get a list of events',
        path: '/api/sprints/:sprint_id/events',
        rawPath: '/api/sprints/:id/events',
        method: 'GET'
      },
    ]
  },
  {
    title: 'Sources',
    desc: '',
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
      // Source Collaborators
      {
        // index
        name: 'Get a list of source collaborators',
        path: '/api/sources/:source_id/collaborators',
        rawPath: '/api/sources/:id/collaborators',
        method: 'GET'
      },
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
        method: 'POST',
        formData: [
          { name: 'title', type: 'String', isRequired: true },
          { name: 'description', type: 'Text', isRequired: false },
          { name: 'due_on', type: 'Timestamp', isRequired: false },
        ]
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
        method: 'PUT',
        formData: [
          { name: 'title', type: 'String', isRequired: true },
          { name: 'description', type: 'Text', isRequired: true },
          { name: 'due_on', type: 'Timestamp', isRequired: true },
          { name: 'state', type: 'String', isRequired: true, note: 'Only accepts <code class="inline">open</code> or <code class="inline">closed</code>' },
        ]
      },
      {
        // destroy
        name: 'Delete a milestone',
        path: '/api/sources/:source_id/milestones/:milestone_id',
        rawPath: '/api/sources/:id/milestones/:milestone_id',
        method: 'DELETE'
      },
    ]
  },
  {
    title: 'Tickets',
    desc: '',
    endpoints: [
      // Tickets
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
        method: 'POST',
        formData: [
          { name: 'title', type: 'String', isRequired: true },
          { name: 'description', type: 'Text', isRequired: false },
          { name: 'type', type: 'String', isRequired: false, note: 'Must be one of <code class="inline">task</code>, <code class="inline">bug</code>, <code class="inline">feature</code>, <code class="inline">question</code>' },
          { name: 'priority', type: 'Number', isRequired: false, note: 'Must be one of <code class="inline">1</code>, <code class="inline">2</code>, <code class="inline">3</code>, <code class="inline">4</code>' },
          { name: 'due_on', type: 'Timestamp', isRequired: false },
          { name: 'start_date', type: 'Timestamp', isRequired: false },
          { name: 'track_cards', type: 'Boolean', isRequired: false },
          { name: 'assignee_id', type: 'Integer', isRequired: false },
        ]
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
        method: 'PUT',
        formData: [
          { name: 'title', type: 'String', isRequired: true },
          { name: 'description', type: 'Text', isRequired: true },
          { name: 'type', type: 'String', isRequired: true, note: 'Must be one of <code class="inline">task</code>, <code class="inline">bug</code>, <code class="inline">feature</code>, or <code class="inline">question</code>' },
          { name: 'priority', type: 'Number', isRequired: true, note: 'Must be one of <code class="inline">1</code>, <code class="inline">2</code>, <code class="inline">3</code>, <code class="inline">4</code>' },
          { name: 'due_on', type: 'Timestamp', isRequired: true },
          { name: 'start_date', type: 'Timestamp', isRequired: true },
          { name: 'track_cards', type: 'Boolean', isRequired: true },
          { name: 'assignee_id', type: 'Integer', isRequired: true },
          { name: 'state', type: 'String', isRequired: true, note: 'Only accepts <code class="inline">open</code> or <code class="inline">closed</code>' },
          { name: 'status', type: 'String', isRequired: true, note: 'Must be one of <code class="inline">new</code>, <code class="inline">queued</code>, <code class="inline">in_progress</code>, <code class="inline">completed</code>, <code class="inline">closed</code>, or <code class="inline">archived</code>' },
        ]
      },
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
        method: 'POST',
        formData: [
          { name: 'card_id', type: 'Integer', isRequired: true },
        ]
      },
      {
        // destroy
        name: 'Remove a card from a ticket',
        path: '/api/tickets/:ticket_id/cards/:card_id',
        rawPath: '/api/tickets/:id/cards/:card_id',
        method: 'DELETE'
      },
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
        method: 'POST',
        formData: [
          { name: 'body', type: 'Text', isRequired: true },
        ]
      },
      {
        // update
        name: 'Update a ticket comment',
        path: '/api/tickets/:ticket_id/comments/:comment_id',
        rawPath: '/api/tickets/:id/comments/:comment_id',
        method: 'PUT',
        formData: [
          { name: 'body', type: 'Text', isRequired: true },
        ]
      },
      {
        // destroy
        name: 'Delete a ticket comment',
        path: '/api/tickets/:ticket_id/comments/:comment_id',
        rawPath: '/api/tickets/:id/comments/:comment_id',
        method: 'DELETE'
      },
      // Ticket Events
      {
        // index
        name: 'Get a list of ticket events',
        path: '/api/tickets/:ticket_id/events',
        rawPath: '/api/tickets/:id/events',
        method: 'GET'
      },
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
  },
  {
    title: 'Workspaces',
    desc: '',
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
        method: 'POST',
        formData: [
          { name: 'project_id', type: 'Integer', isRequired: true },
          { name: 'name', type: 'String', isRequired: true },
          { name: 'description', type: 'Text', isRequired: false },
        ]
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
        method: 'PUT',
        formData: [
          { name: 'name', type: 'String', isRequired: true },
          { name: 'archive_merged_prs', type: 'Boolean', isRequired: true },
          { name: 'points', type: 'Boolean', isRequired: true },
          { name: 'priority_format', type: 'String', isRequired: true, note: 'Must be one of <code class="inline">number</code>, <code class="inline">name</code>, or <code class="inline">color</code>' },
          { name: 'priority', type: 'Boolean', isRequired: true },
          { name: 'upvotes', type: 'Boolean', isRequired: true },
          { name: 'use_category_labels', type: 'Boolean', isRequired: true },
          { name: 'description', type: 'Text', isRequired: true },
        ]
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
];

module.exports = sections;
