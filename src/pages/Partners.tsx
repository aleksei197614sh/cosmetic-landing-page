import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Icon from "@/components/ui/icon"
import { useState } from "react"

const Partners = () => {
  const [partnerForm, setPartnerForm] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    city: '',
    partnershipType: '',
    experience: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Заявка на партнерство отправлена:', partnerForm)
  }

  const currentPartners = [
    {
      name: "Lumenis",
      country: "Израиль",
      specialization: "Лазерные системы",
      logo: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      description: "Мировой лидер в области лазерных технологий для медицины и эстетики",
      products: ["Лазеры для эпиляции", "CO2 лазеры", "IPL системы"],
      partnership: "Эксклюзивный дистрибьютор"
    },
    {
      name: "Syneron Candela",
      country: "США",
      specialization: "Эстетическое оборудование",
      logo: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      description: "Ведущий производитель оборудования для эстетической медицины",
      products: ["RF системы", "Ультразвуковые аппараты", "Лазеры"],
      partnership: "Авторизованный дилер"
    },
    {
      name: "Alma Lasers",
      country: "Израиль",
      specialization: "Многофункциональные платформы",
      logo: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      description: "Инновационные решения для косметологии и дерматологии",
      products: ["Многофункциональные платформы", "Лазеры", "RF аппараты"],
      partnership: "Официальный партнер"
    },
    {
      name: "Cutera",
      country: "США",
      specialization: "Лазерные и световые системы",
      logo: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      description: "Передовые технологии для эстетической медицины",
      products: ["Лазеры", "IPL", "RF системы"],
      partnership: "Дистрибьютор"
    },
    {
      name: "Fotona",
      country: "Словения",
      specialization: "Лазерные системы",
      logo: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      description: "Европейский производитель высококачественных лазеров",
      products: ["Er:YAG лазеры", "Nd:YAG лазеры", "Комбинированные системы"],
      partnership: "Региональный дистрибьютор"
    },
    {
      name: "Pollogen",
      country: "Израиль",
      specialization: "RF технологии",
      logo: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      description: "Специалист по радиочастотным технологиям",
      products: ["TriPollar RF", "Многополярные системы", "Портативные аппараты"],
      partnership: "Эксклюзивный представитель"
    }
  ]

  const partnershipTypes = [
    {
      title: "Региональный дилер",
      description: "Продажа оборудования в определенном регионе",
      benefits: [
        "Эксклюзивная территория",
        "Маркетинговая поддержка",
        "Обучение персонала",
        "Техническая поддержка"
      ],
      requirements: [
        "Опыт в медицинской сфере",
        "Собственный офис",
        "Квалифицированный персонал",
        "Финансовые гарантии"
      ]
    },
    {
      title: "Сервисный партнер",
      description: "Техническое обслуживание и ремонт оборудования",
      benefits: [
        "Обучение технических специалистов",
        "Поставка запчастей",
        "Техническая документация",
        "Сертификация"
      ],
      requirements: [
        "Техническая база",
        "Сертифицированные специалисты",
        "Опыт ремонта медтехники",
        "Соответствие стандартам"
      ]
    },
    {
      title: "Образовательный партнер",
      description: "Проведение обучающих программ",
      benefits: [
        "Методические материалы",
        "Сертификация тренеров",
        "Демонстрационное оборудование",
        "Совместный маркетинг"
      ],
      requirements: [
        "Образовательная лицензия",
        "Квалифицированные преподаватели",
        "Учебные помещения",
        "Опыт в медицинском образовании"
      ]
    }
  ]

  const benefits = [
    {
      icon: "TrendingUp",
      title: "Рост бизнеса",
      description: "Доступ к инновационным продуктам и растущему рынку медицинских технологий"
    },
    {
      icon: "Users",
      title: "Поддержка",
      description: "Комплексная поддержка в продажах, маркетинге и техническом обслуживании"
    },
    {
      icon: "Award",
      title: "Репутация",
      description: "Работа с проверенными брендами и качественным оборудованием"
    },
    {
      icon: "BookOpen",
      title: "Обучение",
      description: "Постоянное обучение и повышение квалификации персонала"
    }
  ]

  const requirements = [
    "Опыт работы в медицинской или косметологической сфере от 2 лет",
    "Наличие собственного офиса и демонстрационного зала",
    "Квалифицированный персонал с медицинским образованием",
    "Финансовая стабильность и возможность инвестиций",
    "Готовность к долгосрочному сотрудничеству",
    "Соответствие требованиям по сертификации и лицензированию"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-medical-blue/5 to-white">
      {/* Header */}
      <div className="bg-medical-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Партнерская программа</h1>
          <p className="text-xl opacity-90">Присоединяйтесь к нашей сети успешных партнеров</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Current Partners */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
            Наши партнеры-производители
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPartners.map((partner, index) => (
              <Card key={index} className="border-medical-blue/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-16 h-16 rounded-lg object-cover mr-4"
                    />
                    <div>
                      <CardTitle className="text-medical-blue">{partner.name}</CardTitle>
                      <CardDescription>{partner.country}</CardDescription>
                      <Badge variant="outline" className="mt-1">{partner.partnership}</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-medical-gray">{partner.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Специализация:</h4>
                    <Badge className="bg-medical-blue/10 text-medical-blue">
                      {partner.specialization}
                    </Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Продукты:</h4>
                    <div className="flex flex-wrap gap-1">
                      {partner.products.map((product, productIndex) => (
                        <Badge key={productIndex} variant="outline" className="text-xs">
                          {product}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnership Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
            Типы партнерства
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="border-medical-blue/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-medical-blue">{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-medical-green">Преимущества:</h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-sm">
                          <Icon name="Check" className="mr-2 mt-1 text-medical-green" size={14} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-medical-blue">Требования:</h4>
                    <ul className="space-y-2">
                      {type.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-sm">
                          <Icon name="Dot" className="mr-2 mt-1 text-medical-blue" size={14} />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Partnership Application Form */}
          <div>
            <Card className="shadow-xl border-medical-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl text-medical-blue flex items-center">
                  <Icon name="Handshake" className="mr-3" size={28} />
                  Заявка на партнерство
                </CardTitle>
                <CardDescription>
                  Заполните форму, и мы рассмотрим возможности сотрудничества
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Название компании *</Label>
                    <Input 
                      id="companyName" 
                      placeholder="ООО 'Ваша компания'"
                      value={partnerForm.companyName}
                      onChange={(e) => setPartnerForm({...partnerForm, companyName: e.target.value})}
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Контактное лицо *</Label>
                      <Input 
                        id="contactName" 
                        placeholder="Ваше имя"
                        value={partnerForm.contactName}
                        onChange={(e) => setPartnerForm({...partnerForm, contactName: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">Город *</Label>
                      <Input 
                        id="city" 
                        placeholder="Москва"
                        value={partnerForm.city}
                        onChange={(e) => setPartnerForm({...partnerForm, city: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your@company.com"
                        value={partnerForm.email}
                        onChange={(e) => setPartnerForm({...partnerForm, email: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+7 (999) 123-45-67"
                        value={partnerForm.phone}
                        onChange={(e) => setPartnerForm({...partnerForm, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="partnershipType">Тип партнерства</Label>
                      <Select value={partnerForm.partnershipType} onValueChange={(value) => setPartnerForm({...partnerForm, partnershipType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тип" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dealer">Региональный дилер</SelectItem>
                          <SelectItem value="service">Сервисный партнер</SelectItem>
                          <SelectItem value="education">Образовательный партнер</SelectItem>
                          <SelectItem value="other">Другое</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Опыт работы</Label>
                      <Select value={partnerForm.experience} onValueChange={(value) => setPartnerForm({...partnerForm, experience: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите опыт" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-2">1-2 года</SelectItem>
                          <SelectItem value="3-5">3-5 лет</SelectItem>
                          <SelectItem value="5-10">5-10 лет</SelectItem>
                          <SelectItem value="10+">Более 10 лет</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Дополнительная информация</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Расскажите о вашей компании, опыте работы, планах развития..."
                      rows={4}
                      value={partnerForm.message}
                      onChange={(e) => setPartnerForm({...partnerForm, message: e.target.value})}
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

          {/* Benefits and Requirements */}
          <div className="space-y-8">
            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-medical-gray-dark mb-6">
                Преимущества партнерства
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="border-medical-blue/20">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="p-3 bg-medical-blue/10 rounded-lg mr-4">
                          <Icon name={benefit.icon} className="text-medical-blue" size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-medical-gray-dark mb-2">
                            {benefit.title}
                          </h4>
                          <p className="text-medical-gray">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div>
              <h3 className="text-2xl font-bold text-medical-gray-dark mb-6">
                Требования к партнерам
              </h3>
              <Card className="border-medical-blue/20">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <Icon name="CheckCircle" className="mr-3 mt-1 text-medical-green" size={16} />
                        <span className="text-medical-gray">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-medical-blue to-medical-blue-light text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы стать партнером?</h2>
          <p className="text-xl mb-6 opacity-90">
            Присоединяйтесь к успешной команде профессионалов медицинской индустрии
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-medical-blue hover:bg-gray-100">
              <Icon name="FileText" className="mr-2" size={20} />
              Скачать презентацию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-medical-blue">
              <Icon name="Phone" className="mr-2" size={20} />
              Обсудить условия
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners