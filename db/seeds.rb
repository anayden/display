PostTemplate.create({
                      name: 'comment',
                      template: [
                        {
                          component_type: 'string',
                          name: 'Имя комментатора',
                          ord: 0,
                          value: '',
                        },
                        {
                          component_type: 'string',
                          name: 'Текст комментария',
                          ord: 10,
                          value: '',
                        }
                      ]
                    })

PostTemplate.create({
                      name: 'material',
                      template: [
                        {
                          component_type: 'string',
                          name: 'Заголовок',
                          ord: 0,
                          value: ''
                        },
                        {
                          component_type: 'boolean',
                          name: 'Опубликовано',
                          ord: 10,
                          value: false
                        },
                        {
                          component_type: 'string',
                          name: 'Тело',
                          ord: 20,
                          value: ''
                        },
                        {
                          component_type: 'relation',
                          name: 'Комментарии',
                          ord: 30,
                          value: ''
                        }
                      ]
                    })
