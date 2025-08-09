import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Icon from "@/components/ui/icon"
import { useState } from "react"

const Careers = () => {
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    education: '',
    coverLetter: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Заявка на работу отправлена:', applicationForm)
  }

  const openPositions = [
    {
      id: 1,
      title: "Инженер по медицинскому оборудованию",
      department: "Технический отдел",
      location: "Москва",
      type: "Полная занятость",
      experience: "3-5 лет",
      salary: "от 120 000 ₽",
      description: "Техническое обслуживание и ремонт медицинского оборудования",
      requirements: [
        "Высшее техническое образование",
        "Опыт работы с медицинским оборудованием",
        "Знание электроники и механики",
        "Готовность к командировкам"
      ],
      responsibilities: [
        "Установка и настройка оборудования",
        "Проведение технического обслуживания",
        "Диагностика и устранение неисправностей",
        "Обучение персонала клиентов"
      ]
    },
    {
      id: 2,
      title: "Менеджер по продажам",
      department: "Отдел продаж",
      location: "Санкт-Петербург",
      type: "Полная занятость",
      experience: "2-4 года",
      salary: "от 80 000 ₽ + %",
      description: "Продажа медицинского оборудования клиникам и медицинским центрам",
      requirements: [
        "Опыт продаж в B2B сегменте",
        "Знание медицинской сферы приветствуется",
        "Коммуникативные навыки",
        "Водительские права категории B"
      ],
      responsibilities: [
        "Поиск и привлечение новых клиентов",
        "Ведение переговоров и заключение сделок",
        "Консультирование по продукции",
        "Участие в выставках и конференциях"
      ]
    },
    {
      id: 3,
      title: "Специалист по обучению",
      department: "Образовательный центр",
      location: "Москва",
      type: "Полная занятость",
      experience: "5+ лет",
      salary: "от 100 000 ₽",
      description: "Проведение обучающих программ для медицинского персонала",
      requirements: [
        "Медицинское образование",
        "Опыт работы в косметологии",
        "Педагогические навыки",
        "Знание английского языка"
      ],
      responsibilities: [
        "Разработка учебных программ",
        "Проведение теоретических и практических занятий",
        "Сертификация специалистов",
        "Создание методических материалов"
      ]
    },
    {
      id: 4,
      title: "Маркетинг-менеджер",
      department: "Маркетинг",
      location: "Москва",
      type: "Полная занятость",
      experience: "2-3 года",
      salary: "от 90 000 ₽",
      description: "Развитие маркетинговых стратегий и продвижение продукции",
      requirements: [
        "Высшее образование в области маркетинга",
        "Опыт в digital-маркетинге",
        "Знание CRM систем",
        "Аналитические способности"
      ],
      responsibilities: [
        "Планирование маркетинговых кампаний",
        "Управление digital-каналами",
        "Анализ рынка и конкурентов",
        "Организация мероприятий"
      ]
    },
    {
      id: 5,
      title: "Логист",
      department: "Логистика",
      location: "Москва",
      type: "Полная занятость",
      experience: "1-3 года",
      salary: "от 70 000 ₽",
      description: "Организация поставок и складского учета медицинского оборудования",
      requirements: [
        "Опыт работы в логистике",
        "Знание 1С и Excel",
        "Внимательность к деталям",
        "Организационные способности"
      ],
      responsibilities: [
        "Планирование поставок",
        "Контроль складских остатков",
        "Взаимодействие с поставщиками",
        "Оформление документации"
      ]
    },
    {
      id: 6,
      title: "HR-специалист",
      department: "Управление персоналом",
      location: "Москва",
      type: "Полная занятость",
      experience: "2-4 года",
      salary: "от 85 000 ₽",
      description: "Подбор персонала и развитие HR-процессов в компании",
      requirements: [
        "Высшее образование",
        "Опыт работы в HR",
        "Знание трудового законодательства",
        "Навыки интервьюирования"
      ],
      responsibilities: [
        "Подбор и адаптация персонала",
        "Ведение кадрового документооборота",
        "Организация обучения сотрудников",
        "Развитие корпоративной культуры"
      ]
    }
  ]

  const benefits = [
    {
      icon: "DollarSign",
      title: "Конкурентная зарплата",
      description: "Достойная оплата труда с возможностью роста"
    },
    {
      icon: "Heart",
      title: "Медицинское страхование",
      description: "Полис ДМС для сотрудника и семьи"
    },
    {
      icon: "BookOpen",
      title: "Обучение и развитие",
      description: "Корпоративные тренинги и профессиональные курсы"
    },
    {
      icon: "Calendar",
      title: "Гибкий график",
      description: "Возможность удаленной работы и гибкого графика"
    },
    {
      icon: "Coffee",
      title: "Комфортный офис",
      description: "Современный офис в центре города с зоной отдыха"
    },
    {
      icon: "Plane",
      title: "Корпоративные поездки",
      description: "Участие в выставках и конференциях за рубежом"
    }
  ]

  const companyValues = [
    {
      title: "Профессионализм",
      description: "Мы ценим экспертность и стремление к совершенству в работе"
    },
    {
      title: "Инновации",
      description: "Поддерживаем новые идеи и современные подходы к решению задач"
    },
    {
      title: "Командная работа",
      description: "Верим в силу команды и взаимопомощь между коллегами"
    },
    {
      title: "Развитие",
      description: "Инвестируем в профессиональный и личностный рост сотрудников"
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Полная занятость": return "bg-green-100 text-green-800"
      case "Частичная занятость": return "bg-yellow-100 text-yellow-800"
      case "Стажировка": return "bg-blue-100 text-blue-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-medical-blue/5 to-white">
      {/* Header */}
      <div className="bg-medical-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Карьера в МедКосмет</h1>
          <p className="text-xl opacity-90">Присоединяйтесь к команде профессионалов медицинской индустрии</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Company Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center p-6 border-medical-blue/20">
            <div className="text-3xl font-bold text-medical-blue mb-2">50+</div>
            <div className="text-medical-gray">Сотрудников</div>
          </Card>
          <Card className="text-center p-6 border-medical-blue/20">
            <div className="text-3xl font-bold text-medical-blue mb-2">15</div>
            <div className="text-medical-gray">Лет на рынке</div>
          </Card>
          <Card className="text-center p-6 border-medical-blue/20">
            <div className="text-3xl font-bold text-medical-blue mb-2">95%</div>
            <div className="text-medical-gray">Довольных сотрудников</div>
          </Card>
          <Card className="text-center p-6 border-medical-blue/20">
            <div className="text-3xl font-bold text-medical-blue mb-2">6</div>
            <div className="text-medical-gray">Открытых вакансий</div>
          </Card>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
            Открытые вакансии
          </h2>
          <div className="space-y-6">
            {openPositions.map(position => (
              <Card key={position.id} className="border-medical-blue/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="mb-4 lg:mb-0">
                      <CardTitle className="text-medical-blue text-xl mb-2">{position.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="outline">{position.department}</Badge>
                        <Badge className={getTypeColor(position.type)}>{position.type}</Badge>
                        <Badge variant="outline">{position.location}</Badge>
                      </div>
                      <CardDescription className="text-base">{position.description}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-medical-green mb-1">{position.salary}</div>
                      <div className="text-sm text-medical-gray">Опыт: {position.experience}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-medical-blue">Требования:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <Icon name="Check" className="mr-2 mt-1 text-medical-green" size={14} />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-medical-blue">Обязанности:</h4>
                      <ul className="space-y-2">
                        {position.responsibilities.map((resp, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <Icon name="Dot" className="mr-2 mt-1 text-medical-blue" size={14} />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button className="bg-medical-blue hover:bg-medical-blue-dark">
                      <Icon name="Send" className="mr-2" size={16} />
                      Откликнуться
                    </Button>
                    <Button variant="outline">
                      <Icon name="Bookmark" className="mr-2" size={16} />
                      Сохранить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Application Form */}
          <div>
            <Card className="shadow-xl border-medical-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl text-medical-blue flex items-center">
                  <Icon name="User" className="mr-3" size={28} />
                  Отправить резюме
                </CardTitle>
                <CardDescription>
                  Заполните форму, и мы рассмотрим вашу кандидатуру
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">ФИО *</Label>
                      <Input 
                        id="name" 
                        placeholder="Иванов Иван Иванович"
                        value={applicationForm.name}
                        onChange={(e) => setApplicationForm({...applicationForm, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+7 (999) 123-45-67"
                        value={applicationForm.phone}
                        onChange={(e) => setApplicationForm({...applicationForm, phone: e.target.value})}
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
                      value={applicationForm.email}
                      onChange={(e) => setApplicationForm({...applicationForm, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="position">Желаемая позиция</Label>
                      <Select value={applicationForm.position} onValueChange={(value) => setApplicationForm({...applicationForm, position: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите позицию" />
                        </SelectTrigger>
                        <SelectContent>
                          {openPositions.map(pos => (
                            <SelectItem key={pos.id} value={pos.title}>
                              {pos.title}
                            </SelectItem>
                          ))}
                          <SelectItem value="other">Другая позиция</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Опыт работы</Label>
                      <Select value={applicationForm.experience} onValueChange={(value) => setApplicationForm({...applicationForm, experience: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите опыт" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1">Без опыта - 1 год</SelectItem>
                          <SelectItem value="1-3">1-3 года</SelectItem>
                          <SelectItem value="3-5">3-5 лет</SelectItem>
                          <SelectItem value="5-10">5-10 лет</SelectItem>
                          <SelectItem value="10+">Более 10 лет</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="education">Образование</Label>
                    <Input 
                      id="education" 
                      placeholder="Высшее медицинское, МГУ им. Ломоносова"
                      value={applicationForm.education}
                      onChange={(e) => setApplicationForm({...applicationForm, education: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="coverLetter">Сопроводительное письмо</Label>
                    <Textarea 
                      id="coverLetter" 
                      placeholder="Расскажите о себе, своем опыте и мотивации..."
                      rows={4}
                      value={applicationForm.coverLetter}
                      onChange={(e) => setApplicationForm({...applicationForm, coverLetter: e.target.value})}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-medical-blue hover:bg-medical-blue-dark"
                  >
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить резюме
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Benefits and Values */}
          <div className="space-y-8">
            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-medical-gray-dark mb-6">
                Что мы предлагаем
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="border-medical-blue/20 p-4">
                    <div className="flex items-start">
                      <div className="p-2 bg-medical-blue/10 rounded-lg mr-3">
                        <Icon name={benefit.icon} className="text-medical-blue" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-medical-gray-dark mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-medical-gray">{benefit.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Company Values */}
            <div>
              <h3 className="text-2xl font-bold text-medical-gray-dark mb-6">
                Наши ценности
              </h3>
              <div className="space-y-4">
                {companyValues.map((value, index) => (
                  <Card key={index} className="border-medical-blue/20 p-4">
                    <h4 className="font-semibold text-medical-blue mb-2">{value.title}</h4>
                    <p className="text-medical-gray">{value.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-medical-blue to-medical-blue-light text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Не нашли подходящую вакансию?</h2>
          <p className="text-xl mb-6 opacity-90">
            Отправьте нам свое резюме, и мы свяжемся с вами при появлении подходящих позиций
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-medical-blue hover:bg-gray-100">
              <Icon name="Mail" className="mr-2" size={20} />
              Отправить резюме
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-medical-blue">
              <Icon name="Users" className="mr-2" size={20} />
              Узнать о компании
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Careers