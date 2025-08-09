import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const Services = () => {
  const services = [
    {
      title: "Установка и настройка",
      description: "Профессиональная установка оборудования с полной настройкой и калибровкой",
      icon: "Settings",
      features: [
        "Доставка и распаковка",
        "Подключение к сетям",
        "Калибровка параметров",
        "Тестирование работы"
      ],
      price: "от 50 000 ₽",
      duration: "1-2 дня"
    },
    {
      title: "Обучение персонала",
      description: "Комплексное обучение работе с оборудованием для вашего персонала",
      icon: "GraduationCap",
      features: [
        "Теоретическая подготовка",
        "Практические занятия",
        "Сертификация специалистов",
        "Методические материалы"
      ],
      price: "от 30 000 ₽",
      duration: "2-5 дней"
    },
    {
      title: "Техническое обслуживание",
      description: "Регулярное ТО для поддержания оборудования в идеальном состоянии",
      icon: "Wrench",
      features: [
        "Плановые проверки",
        "Замена расходников",
        "Диагностика систем",
        "Профилактические работы"
      ],
      price: "от 15 000 ₽",
      duration: "По графику"
    },
    {
      title: "Ремонт и диагностика",
      description: "Быстрый ремонт с использованием оригинальных запчастей",
      icon: "Tool",
      features: [
        "Экспресс-диагностика",
        "Оригинальные запчасти",
        "Гарантия на ремонт",
        "Выездной сервис"
      ],
      price: "от 5 000 ₽",
      duration: "1-7 дней"
    },
    {
      title: "Консультации специалистов",
      description: "Экспертные консультации по выбору и использованию оборудования",
      icon: "MessageCircle",
      features: [
        "Анализ потребностей",
        "Подбор оборудования",
        "Расчет окупаемости",
        "Техническая поддержка"
      ],
      price: "Бесплатно",
      duration: "По запросу"
    },
    {
      title: "Лизинг и рассрочка",
      description: "Гибкие условия финансирования для приобретения оборудования",
      icon: "CreditCard",
      features: [
        "Лизинг до 5 лет",
        "Рассрочка 0%",
        "Минимальный пакет документов",
        "Быстрое одобрение"
      ],
      price: "от 0% годовых",
      duration: "До 60 месяцев"
    }
  ]

  const advantages = [
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "Все работы выполняются сертифицированными специалистами"
    },
    {
      icon: "Clock",
      title: "Оперативность",
      description: "Быстрое реагирование на заявки и выполнение работ"
    },
    {
      icon: "Award",
      title: "Профессионализм",
      description: "Многолетний опыт работы с медицинским оборудованием"
    },
    {
      icon: "Phone",
      title: "Поддержка 24/7",
      description: "Круглосуточная техническая поддержка по телефону"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-medical-blue/5 to-white">
      {/* Header */}
      <div className="bg-medical-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h1>
          <p className="text-xl opacity-90">Полный спектр услуг для вашего медицинского оборудования</p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-medical-blue/20">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-medical-blue/10 rounded-lg mr-4">
                    <Icon name={service.icon} className="text-medical-blue" size={32} />
                  </div>
                  <div>
                    <CardTitle className="text-medical-blue">{service.title}</CardTitle>
                    <div className="flex items-center gap-4 mt-2">
                      <Badge variant="outline" className="text-medical-green border-medical-green">
                        {service.price}
                      </Badge>
                      <span className="text-sm text-gray-500">{service.duration}</span>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Что включено:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Icon name="Check" className="mr-2 text-medical-green" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full bg-medical-blue hover:bg-medical-blue-dark">
                  Заказать услугу
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Advantages */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-medical-blue/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon} className="text-medical-blue" size={32} />
                </div>
                <h3 className="font-bold text-lg text-medical-gray-dark mb-2">{advantage.title}</h3>
                <p className="text-medical-gray">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-medical-blue to-medical-blue-light text-white rounded-xl p-8 mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна консультация?</h2>
          <p className="text-xl mb-6 opacity-90">
            Наши специалисты помогут подобрать оптимальный пакет услуг
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-medical-blue hover:bg-gray-100">
              <Icon name="Phone" className="mr-2" size={20} />
              Позвонить сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-medical-blue">
              <Icon name="MessageSquare" className="mr-2" size={20} />
              Написать в чат
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services