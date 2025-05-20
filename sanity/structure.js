// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Patrionics DashBoard')
    .items([
      S.documentTypeListItem('project').title('Project'),
      S.documentTypeListItem('project_category').title('Project_Categories'),
      S.documentTypeListItem('service').title('Service'),
      S.divider(),
      S.documentTypeListItem('review').title('Review'),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['project', 'project_category', 'service', 'review'].includes(item.getId()),
      ),
    ])
