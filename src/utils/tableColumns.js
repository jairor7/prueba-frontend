export const commentsColumns = [
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
    width: '100px',
    sorter: (a, b) => { return a.name.localeCompare(b.name) }
  }, {
    title: 'Correo',
    dataIndex: 'email',
    key: 'email',
    width: '100px',
    sorter: (a, b) => { return a.email.localeCompare(b.email) },
  }, {
    title: 'Contenido',
    dataIndex: 'body',
    key: 'body',
    width: '100px',
    sorter: (a, b) => { return a.body.localeCompare(b.body) },
  }, {
    title: 'Acciones',
    dataIndex: 'actions',
    key: 'actions',
    width: '100px'
  }];