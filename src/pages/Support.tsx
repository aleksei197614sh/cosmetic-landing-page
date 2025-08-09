import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Icon from "@/components/ui/icon"
import { useState } from "react"

const Support = () => {
  const [ticketForm, setTicketForm] = useState({
    name: '',
    email: '',
    phone: '',
    equipment: '',
    priority: '',
    subject: '',
    description: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Заявка отправлена:', ticketForm)
  }

  const supportChannels = [
    {
      icon: "Phone",
      title: "Телефон горячей линии",
      value: "+7 (495) 123-45-67",
      description: "Круглосуточная поддержка",
      availability: "24/7",
      responseTime: "Мгновенно"
    },
    {
      icon: "MessageCircle",
      title: "Онлайн чат",
      value: "Чат на сайте",
      description: "Быстрые ответы от специалистов",
      availability: "9:00-21:00",
      responseTime: "1-3 мин"
    },
    {
      icon: "Mail",
      title: "Email поддержка",
      value: "support@medkosmet.ru",
      description: "Подробные консультации",
      availability: "24/7",
      responseTime: "До 1 часа"
    },
    {
      icon: "Send",
      title: "Telegram",
      value: "@medkosmet_support",
      description: "Техническая поддержка",
      availability: "24/7",
      responseTime: "5-10 мин"
    }
  ]

  const faqCategories = [
    {
      title: "Общие вопросы",
      items: [
        {
          question: "Как получить техническую поддержку?",
          answer: "Вы можете обратиться к нам любым удобным способом: по телефону горячей линии, через онлайн-чат, email или Telegram. Наши специалисты работают круглосуточно."
        },
        {
          question: "Какие гарантии предоставляются на оборудование?",
          answer: "Мы предоставляем официальную гарантию производителя от 1 до 3 лет в зависимости от типа оборудования. Дополнительно доступны расширенные гарантийные программы."
        },
        {
          question: "Как быстро выполняется ремонт?",
          answer: "Стандартное время ремонта составляет 3-7 рабочих дней. Для срочных случаев доступен экспресс-ремонт в течение 24 часов."
        }
      ]
    },
    {
      title: "Техническая поддержка",
      items: [
        {
          question: "Что делать, если оборудование не включается?",
          answer: "Проверьте подключение к сети, состояние предохранителей и кабелей. Если проблема не решается, обратитесь в техническую поддержку для диагностики."
        },
        {
          question: "Как обновить программное обеспечение?",
          answer: "Обновления ПО выполняются нашими специалистами. Не пытайтесь обновлять самостоятельно - это может привести к потере гарантии."
        },
        {
          question: "Можно ли получить удаленную диагностику?",
          answer: "Да, многие модели поддерживают удаленную диагностику. Наши специалисты могут подключиться к оборудованию и провести проверку дистанционно."
        }
      ]
    },
    {
      title: "Обслуживание",
      items: [
        {
          question: "Как часто нужно проводить техническое обслуживание?",
          answer: "Рекомендуется проводить плановое ТО каждые 6 месяцев или согласно регламенту производителя. Это обеспечивает стабильную работу и продлевает срок службы."
        },
        {
          question: "Что включает в себя техническое обслуживание?",
          answer: "ТО включает проверку всех систем, калибровку, замену расходных материалов, очистку и профилактические работы согласно техническому регламенту."
        },
        {
          question: "Можно ли заключить договор на постоянное обслуживание?",
          answer: "Да, мы предлагаем различные программы сервисного обслуживания с фиксированной стоимостью и приоритетным обслуживанием."
        }
      ]
    }
  ]

  const knowledgeBase = [
    {
      title: "Руководства пользователя",
      description: "Подробные инструкции по эксплуатации оборудования",
      icon: "BookOpen",
      count: "50+ документов"
    },
    {
      title: "Видеоуроки",
      description: "Обучающие видео по работе с оборудованием",
      icon: "Play",
      count: "30+ видео"
    },
    {
      title: "Техническая документация",
      description: "Схемы, спецификации и технические характеристики",
      icon: "FileText",
      count: "100+ файлов"
    },
    {
      title: "Программное обеспечение",
      description: "Драйверы, утилиты и обновления ПО",
      icon: "Download",
      count: "20+ программ"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-medical-blue/5 to-white">
      {/* Header */}
      <div className="bg-medical-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Техническая поддержка</h1>
          <p className="text-xl opacity-90">Профессиональная помощь 24/7 для вашего оборудования</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Support Channels */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportChannels.map((channel, index) => (
            <Card key={index} className="text-center p-6 border-medical-blue/20 hover:shadow-lg transition-all duration-300 group cursor-pointer">
              <Icon name={channel.icon} className="mx-auto mb-4 text-medical-blue group-hover:scale-110 transition-transform" size={40} />
              <h3 className="font-bold text-lg text-medical-gray-dark mb-2">{channel.title}</h3>
              <p className="text-medical-blue font-semibold mb-2">{channel.value}</p>
              <p className="text-sm text-medical-gray mb-3">{channel.description}</p>
              <div className="flex justify-between text-xs text-medical-gray mb-4">
                <span>Доступно: {channel.availability}</span>
                <span>Ответ: {channel.responseTime}</span>
              </div>
              <Button size="sm" className="bg-medical-blue hover:bg-medical-blue-dark">
                Связаться
              </Button>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Support Ticket Form */}
          <div>
            <Card className="shadow-xl border-medical-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl text-medical-blue flex items-center">
                  <Icon name="Headphones" className="mr-3" size={28} />
                  Создать заявку
                </CardTitle>
                <CardDescription>
                  Опишите проблему, и наш специалист свяжется с вами
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя *</Label>
                      <Input 
                        id="name" 
                        placeholder="Введите ваше имя"
                        value={ticketForm.name}
                        onChange={(e) => setTicketForm({...ticketForm, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+7 (999) 123-45-67"
                        value={ticketForm.phone}
                        onChange={(e) => setTicketForm({...ticketForm, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com"
                      value={ticketForm.email}
                      onChange={(e) => setTicketForm({...ticketForm, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="equipment">Модель оборудования</Label>
                      <Input 
                        id="equipment" 
                        placeholder="Например: DiodeLux Pro"
                        value={ticketForm.equipment}
                        onChange={(e) => setTicketForm({...ticketForm, equipment: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="priority">Приоритет</Label>
                      <Select value={ticketForm.priority} onValueChange={(value) => setTicketForm({...ticketForm, priority: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите приоритет" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Низкий</SelectItem>
                          <SelectItem value="medium">Средний</SelectItem>
                          <SelectItem value="high">Высокий</SelectItem>
                          <SelectItem value="critical">Критический</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Тема обращения *</Label>
                    <Input 
                      id="subject" 
                      placeholder="Кратко опишите проблему"
                      value={ticketForm.subject}
                      onChange={(e) => setTicketForm({...ticketForm, subject: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Описание проблемы *</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Подробно опишите проблему, когда она возникла, какие действия предпринимались..."
                      rows={5}
                      value={ticketForm.description}
                      onChange={(e) => setTicketForm({...ticketForm, description: e.target.value})}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-medical-blue hover:bg-medical-blue-dark"
                  >
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Knowledge Base */}
          <div>
            <h2 className="text-2xl font-bold text-medical-gray-dark mb-6">База знаний</h2>
            <div className="space-y-4 mb-8">
              {knowledgeBase.map((item, index) => (
                <Card key={index} className="border-medical-blue/20 hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div className="p-3 bg-medical-blue/10 rounded-lg mr-4">
                        <Icon name={item.icon} className="text-medical-blue" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-medical-gray-dark">{item.title}</h3>
                        <p className="text-medical-gray">{item.description}</p>
                        <Badge variant="outline" className="mt-2">{item.count}</Badge>
                      </div>
                      <Icon name="ChevronRight" className="text-medical-gray" size={20} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="border-medical-blue/20">
              <CardHeader>
                <CardTitle className="text-medical-blue">Быстрые действия</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Download" className="mr-2" size={16} />
                  Скачать драйверы
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Calendar" className="mr-2" size={16} />
                  Записаться на ТО
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="Wrench" className="mr-2" size={16} />
                  Заказать запчасти
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="BookOpen" className="mr-2" size={16} />
                  Обучающие материалы
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
            Часто задаваемые вопросы
          </h2>
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-xl font-bold text-medical-blue mb-4">{category.title}</h3>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <AccordionItem key={itemIndex} value={`${categoryIndex}-${itemIndex}`} className="border border-medical-blue/20 rounded-lg px-4">
                      <AccordionTrigger className="text-left hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-medical-gray">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Support */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
          <Icon name="AlertTriangle" className="mx-auto mb-4 text-red-500" size={48} />
          <h2 className="text-2xl font-bold text-red-700 mb-4">Экстренная поддержка</h2>
          <p className="text-red-600 mb-6">
            Если оборудование полностью вышло из строя и требуется немедленное вмешательство
          </p>
          <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
            <Icon name="Phone" className="mr-2" size={20} />
            Экстренный вызов: +7 (495) 911-11-11
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Support