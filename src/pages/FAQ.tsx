import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"
import { useState } from "react"

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [questionForm, setQuestionForm] = useState({
    name: '',
    email: '',
    subject: '',
    question: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Вопрос отправлен:', questionForm)
  }

  const faqCategories = [
    {
      title: "Общие вопросы",
      icon: "HelpCircle",
      color: "bg-blue-100 text-blue-800",
      questions: [
        {
          question: "Какие гарантии предоставляются на оборудование?",
          answer: "Мы предоставляем официальную гарантию производителя от 1 до 3 лет в зависимости от типа оборудования. Дополнительно доступны расширенные гарантийные программы сроком до 5 лет. Гарантия покрывает все производственные дефекты и неисправности при правильной эксплуатации.",
          popular: true
        },
        {
          question: "Как быстро происходит доставка оборудования?",
          answer: "Стандартная доставка по Москве и МО занимает 1-2 рабочих дня. В регионы России доставка осуществляется в течение 3-7 рабочих дней. Для крупногабаритного оборудования возможна организация специальной доставки с предварительным согласованием.",
          popular: false
        },
        {
          question: "Можно ли получить демонстрацию оборудования?",
          answer: "Да, мы проводим демонстрации оборудования в наших демо-залах в Москве и Санкт-Петербурге. Также возможен выезд специалиста с портативным оборудованием для демонстрации в вашей клинике. Демонстрация проводится бесплатно.",
          popular: true
        },
        {
          question: "Какие документы нужны для покупки медицинского оборудования?",
          answer: "Для юридических лиц необходимы: копии учредительных документов, лицензия на медицинскую деятельность (если требуется), справка о постановке на налоговый учет. Мы поможем с оформлением всех необходимых документов.",
          popular: false
        }
      ]
    },
    {
      title: "Техническая поддержка",
      icon: "Settings",
      color: "bg-green-100 text-green-800",
      questions: [
        {
          question: "Как получить техническую поддержку?",
          answer: "Техническая поддержка доступна 24/7 по телефону горячей линии +7 (495) 123-45-67, через онлайн-чат на сайте, email support@medkosmet.ru или Telegram @medkosmet_support. Среднее время ответа составляет 5-15 минут.",
          popular: true
        },
        {
          question: "Что делать, если оборудование не включается?",
          answer: "Сначала проверьте подключение к сети, состояние предохранителей и кабелей питания. Убедитесь, что все соединения надежно закреплены. Если проблема не решается, немедленно обратитесь в техническую поддержку для диагностики.",
          popular: true
        },
        {
          question: "Как часто нужно проводить калибровку оборудования?",
          answer: "Рекомендуется проводить калибровку каждые 6 месяцев или согласно регламенту производителя. Некоторые виды оборудования требуют более частой калибровки. Наши специалисты проведут калибровку с выдачей соответствующего протокола.",
          popular: false
        },
        {
          question: "Можно ли получить удаленную диагностику?",
          answer: "Да, многие современные модели поддерживают удаленную диагностику через интернет. Наши специалисты могут подключиться к оборудованию дистанционно, провести диагностику и во многих случаях устранить неисправности без выезда на место.",
          popular: false
        }
      ]
    },
    {
      title: "Обслуживание и ремонт",
      icon: "Wrench",
      color: "bg-orange-100 text-orange-800",
      questions: [
        {
          question: "Как часто нужно проводить техническое обслуживание?",
          answer: "Плановое техническое обслуживание рекомендуется проводить каждые 6 месяцев. Это включает проверку всех систем, калибровку, замену расходных материалов и профилактические работы. Регулярное ТО продлевает срок службы оборудования и обеспечивает стабильную работу.",
          popular: true
        },
        {
          question: "Сколько времени занимает ремонт оборудования?",
          answer: "Стандартное время ремонта составляет 3-7 рабочих дней в зависимости от сложности неисправности и наличия запчастей. Для срочных случаев доступен экспресс-ремонт в течение 24 часов с доплатой 50% от стоимости работ.",
          popular: true
        },
        {
          question: "Где можно заказать оригинальные запчасти?",
          answer: "Оригинальные запчасти можно заказать через наш сервисный отдел по телефону или через личный кабинет на сайте. Мы поддерживаем склад наиболее востребованных запчастей. Доставка запчастей по России осуществляется в течение 2-5 рабочих дней.",
          popular: false
        },
        {
          question: "Можно ли заключить договор на постоянное обслуживание?",
          answer: "Да, мы предлагаем различные программы сервисного обслуживания: Базовая (плановое ТО), Стандартная (ТО + мелкий ремонт), Премиум (полное обслуживание + приоритетная поддержка). Стоимость зависит от типа и количества оборудования.",
          popular: false
        }
      ]
    },
    {
      title: "Обучение и сертификация",
      icon: "BookOpen",
      color: "bg-purple-100 text-purple-800",
      questions: [
        {
          question: "Какие программы обучения доступны?",
          answer: "Мы предлагаем курсы по всем типам оборудования: лазерные технологии, RF-системы, IPL, HIFU, инъекционная косметология. Доступны базовые и продвинутые программы, очное и дистанционное обучение. Все курсы завершаются выдачей сертификата.",
          popular: true
        },
        {
          question: "Сколько стоит обучение персонала?",
          answer: "Стоимость обучения зависит от программы и количества участников. Базовые курсы от 15 000 ₽ за человека, продвинутые от 30 000 ₽. При покупке оборудования первичное обучение 2-3 специалистов предоставляется бесплатно.",
          popular: true
        },
        {
          question: "Признаются ли ваши сертификаты официально?",
          answer: "Да, наши сертификаты признаются профессиональным сообществом и соответствуют требованиям Минздрава РФ. Мы имеем образовательную лицензию и аккредитацию ведущих производителей медицинского оборудования.",
          popular: false
        },
        {
          question: "Можно ли пройти обучение дистанционно?",
          answer: "Да, мы предлагаем онлайн-курсы с интерактивными модулями, видеолекциями и практическими заданиями. Однако для получения полного сертификата необходимо пройти практическую часть очно в нашем учебном центре.",
          popular: false
        }
      ]
    },
    {
      title: "Финансы и оплата",
      icon: "CreditCard",
      color: "bg-yellow-100 text-yellow-800",
      questions: [
        {
          question: "Какие способы оплаты доступны?",
          answer: "Мы принимаем оплату банковским переводом, наличными, банковскими картами. Доступна рассрочка до 12 месяцев без процентов и лизинг до 5 лет. Для постоянных клиентов предусмотрены специальные условия оплаты.",
          popular: true
        },
        {
          question: "Можно ли купить оборудование в лизинг?",
          answer: "Да, мы сотрудничаем с ведущими лизинговыми компаниями. Лизинг доступен на срок от 12 до 60 месяцев с первоначальным взносом от 10%. Процентная ставка от 8% годовых. Оформление занимает 1-3 рабочих дня.",
          popular: true
        },
        {
          question: "Предоставляете ли вы рассрочку?",
          answer: "Да, доступна рассрочка до 12 месяцев без процентов при покупке оборудования стоимостью от 500 000 ₽. Для оформления необходим минимальный пакет документов. Решение принимается в течение 1 рабочего дня.",
          popular: false
        },
        {
          question: "Есть ли скидки для постоянных клиентов?",
          answer: "Да, для постоянных клиентов действует система скидок до 15% в зависимости от объема закупок. Также доступны специальные предложения при покупке комплекта оборудования и сезонные акции.",
          popular: false
        }
      ]
    },
    {
      title: "Сертификация и документы",
      icon: "FileText",
      color: "bg-red-100 text-red-800",
      questions: [
        {
          question: "Какие сертификаты имеет ваше оборудование?",
          answer: "Все оборудование имеет необходимые сертификаты: регистрационные удостоверения Росздравнадзора, сертификаты соответствия, декларации о соответствии ТР ТС. Международные сертификаты: CE, FDA, ISO 13485. Полный пакет документов предоставляется с каждым аппаратом.",
          popular: true
        },
        {
          question: "Помогаете ли вы с оформлением документов?",
          answer: "Да, мы оказываем полную поддержку в оформлении документов: помощь в получении лицензий, регистрации оборудования, подготовке документов для проверяющих органов. Наши специалисты имеют большой опыт работы с регулирующими органами.",
          popular: false
        },
        {
          question: "Нужна ли лицензия для использования оборудования?",
          answer: "Для большинства косметологического оборудования требуется лицензия на медицинскую деятельность. Мы поможем определить, какая именно лицензия нужна для вашего оборудования, и окажем содействие в ее получении.",
          popular: true
        },
        {
          question: "Как долго действуют сертификаты?",
          answer: "Регистрационные удостоверения действуют бессрочно до внесения изменений в конструкцию. Сертификаты соответствия обновляются каждые 3-5 лет. Мы отслеживаем сроки действия документов и своевременно информируем клиентов об обновлениях.",
          popular: false
        }
      ]
    }
  ]

  const popularQuestions = faqCategories
    .flatMap(category => category.questions.filter(q => q.popular))
    .slice(0, 6)

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-medical-blue/5 to-white">
      {/* Header */}
      <div className="bg-medical-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Часто задаваемые вопросы</h1>
          <p className="text-xl opacity-90">Ответы на самые популярные вопросы о нашем оборудовании и услугах</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Search */}
        <div className="max-w-2xl mx-auto mb-16">
          <Card className="border-medical-blue/20">
            <CardContent className="p-6">
              <div className="relative">
                <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-medical-gray" size={20} />
                <Input
                  placeholder="Поиск по вопросам и ответам..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 text-lg h-12"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Popular Questions */}
        {!searchTerm && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
              Популярные вопросы
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularQuestions.map((question, index) => (
                <Card key={index} className="border-medical-blue/20 hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-medical-blue text-base leading-tight pr-4">
                        {question.question}
                      </CardTitle>
                      <Badge className="bg-red-100 text-red-800 text-xs shrink-0">
                        Популярный
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-medical-gray text-sm line-clamp-3">
                      {question.answer}
                    </p>
                    <Button variant="ghost" className="mt-3 p-0 h-auto text-medical-blue hover:text-medical-blue-dark">
                      Читать полный ответ →
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* FAQ Categories */}
          <div className="lg:col-span-2">
            {filteredCategories.length > 0 ? (
              <div className="space-y-8">
                {filteredCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <div className="flex items-center mb-6">
                      <div className={`p-3 rounded-lg mr-4 ${category.color}`}>
                        <Icon name={category.icon} size={24} />
                      </div>
                      <h2 className="text-2xl font-bold text-medical-gray-dark">{category.title}</h2>
                      <Badge variant="outline" className="ml-4">
                        {category.questions.length} вопросов
                      </Badge>
                    </div>
                    <Accordion type="single" collapsible className="space-y-2">
                      {category.questions.map((item, itemIndex) => (
                        <AccordionItem 
                          key={itemIndex} 
                          value={`${categoryIndex}-${itemIndex}`} 
                          className="border border-medical-blue/20 rounded-lg px-4"
                        >
                          <AccordionTrigger className="text-left hover:no-underline">
                            <div className="flex items-center">
                              {item.popular && (
                                <Badge className="bg-red-100 text-red-800 text-xs mr-3">
                                  Популярный
                                </Badge>
                              )}
                              {item.question}
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="text-medical-gray leading-relaxed">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Icon name="Search" className="mx-auto mb-4 text-gray-400" size={48} />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Ничего не найдено</h3>
                <p className="text-gray-500">Попробуйте изменить поисковый запрос</p>
              </div>
            )}
          </div>

          {/* Ask Question Form */}
          <div>
            <Card className="border-medical-blue/20 sticky top-8">
              <CardHeader>
                <CardTitle className="text-medical-blue flex items-center">
                  <Icon name="MessageCircle" className="mr-2" size={24} />
                  Задать вопрос
                </CardTitle>
                <CardDescription>
                  Не нашли ответ? Задайте вопрос нашим экспертам
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input 
                      id="name" 
                      placeholder="Введите ваше имя"
                      value={questionForm.name}
                      onChange={(e) => setQuestionForm({...questionForm, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com"
                      value={questionForm.email}
                      onChange={(e) => setQuestionForm({...questionForm, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Тема вопроса *</Label>
                    <Input 
                      id="subject" 
                      placeholder="Кратко опишите тему"
                      value={questionForm.subject}
                      onChange={(e) => setQuestionForm({...questionForm, subject: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="question">Ваш вопрос *</Label>
                    <Textarea 
                      id="question" 
                      placeholder="Задайте ваш вопрос подробно..."
                      rows={4}
                      value={questionForm.question}
                      onChange={(e) => setQuestionForm({...questionForm, question: e.target.value})}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-medical-blue hover:bg-medical-blue-dark"
                  >
                    <Icon name="Send" className="mr-2" size={16} />
                    Отправить вопрос
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="border-medical-blue/20 mt-6">
              <CardHeader>
                <CardTitle className="text-medical-blue">Быстрые ссылки</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Phone" className="mr-2" size={16} />
                  Техническая поддержка
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Download" className="mr-2" size={16} />
                  Скачать инструкции
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Calendar" className="mr-2" size={16} />
                  Записаться на обучение
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="MessageSquare" className="mr-2" size={16} />
                  Онлайн консультация
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-gradient-to-r from-medical-blue to-medical-blue-light text-white rounded-xl p-8 mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Не нашли ответ на свой вопрос?</h2>
          <p className="text-xl mb-6 opacity-90">
            Свяжитесь с нашими экспертами для получения персональной консультации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-medical-blue hover:bg-gray-100">
              <Icon name="Phone" className="mr-2" size={20} />
              Позвонить сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-medical-blue">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Написать в чат
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ