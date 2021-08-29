comment_template = PostTemplate.create!({
                                          name: 'comment',
                                          template: [
                                            {
                                              component_type: 'string',
                                              name: 'Имя комментатора',
                                              internal_name: 'name',
                                              ord: 0,
                                              value: ''
                                            },
                                            {
                                              component_type: 'text',
                                              name: 'Текст комментария',
                                              internal_name: 'text',
                                              ord: 10,
                                              value: ''
                                            }
                                          ]
                                        })

material = PostTemplate.create!({
                                  name: 'material',
                                  template: [
                                    {
                                      component_type: 'string',
                                      name: 'Заголовок',
                                      internal_name: 'title',
                                      ord: 0,
                                      value: ''
                                    },
                                    {
                                      component_type: 'boolean',
                                      name: 'Опубликован',
                                      internal_name: 'published?',
                                      ord: 10,
                                      value: false
                                    },
                                    {
                                      component_type: 'text',
                                      name: 'Тело',
                                      internal_name: 'body',
                                      ord: 20,
                                      value: ''
                                    },
                                    {
                                      component_type: 'reference',
                                      name: 'Комментарии',
                                      internal_name: 'comments',
                                      ord: 30,
                                      value: comment_template.id
                                    }
                                  ]
                                })
