import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const About = () => {
  const stats = [
    { number: "15+", label: "лет на рынке", icon: "Calendar" },
    { number: "500+", label: "довольных клиентов", icon: "Users" },
    { number: "1000+", label: "установленных аппаратов", icon: "Package" },
    { number: "24/7", label: "техническая поддержка", icon: "Headphones" }
  ]

  const team = [
    {
      name: "Александр Петров",
      position: "Генеральный директор",
      experience: "20 лет в медицинской индустрии",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      description: "Эксперт в области медицинского оборудования с международным опытом"
    },
    {
      name: "Елена Смирнова",
      position: "Технический директор",
      experience: "15 лет в разработке медтехники",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      description: "Специалист по внедрению и обслуживанию сложного оборудования"
    },
    {
      name: "Михаил Козлов",
      position: "Руководитель отдела продаж",
      experience: "12 лет в B2B продажах",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      description: "Помогает клиникам выбрать оптимальные решения для их задач"
    },
    {
      name: "Анна Волкова",
      position: "Менеджер по обучению",
      experience: "10 лет в медицинском образовании",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      description: "Проводит обучение персонала работе с оборудованием"
    }
  ]

  const values = [
    {
      icon: "Heart",
      title: "Забота о пациентах",
      description: "Все наше оборудование направлено на улучшение качества медицинской помощи"
    },
    {
      icon: "Shield",
      title: "Безопасность превыше всего",
      description: "Строгий контроль качества и соответствие международным стандартам"
    },
    {
      icon: "Lightbulb",
      title: "Инновации",
      description: "Постоянно следим за новейшими технологиями в медицине"
    },
    {
      icon: "Handshake",
      title: "Партнерство",
      description: "Строим долгосрочные отношения с клиентами на основе доверия"
    }
  ]

  const milestones = [
    {
      year: "2009",
      title: "Основание компании",
      description: "Начали работу как дистрибьютор медицинского оборудования"
    },
    {
      year: "2012",
      title: "Расширение ассортимента",
      description: "Добавили косметологическое оборудование в портфель"
    },
    {
      year: "2015",
      title: "Собственный сервис-центр",
      description: "Открыли центр технического обслуживания и ремонта"
    },
    {
      year: "2018",
      title: "Международные партнерства",
      description: "Стали официальными дистрибьюторами ведущих брендов"
    },
    {
      year: "2021",
      title: "Цифровизация",
      description: "Запустили онлайн-платформу для клиентов"
    },
    {
      year: "2024",
      title: "Лидер рынка",
      description: "Стали одним из крупнейших поставщиков в России"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-medical-blue/5 to-white">
      {/* Header */}
      <div className="bg-medical-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">О компании</h1>
          <p className="text-xl opacity-90">Ваш надежный партнер в мире медицинских технологий</p>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 border-medical-blue/20 hover:shadow-lg transition-shadow">
              <Icon name={stat.icon} className="mx-auto mb-4 text-medical-blue" size={48} />
              <div className="text-4xl font-bold text-medical-blue mb-2">{stat.number}</div>
              <div className="text-medical-gray">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-medical-gray-dark mb-6">Наша история</h2>
            <p className="text-lg text-medical-gray mb-6">
              МедКосмет была основана в 2009 году группой специалистов с многолетним опытом в медицинской индустрии. 
              Наша миссия — обеспечить российские клиники самым современным и качественным оборудованием.
            </p>
            <p className="text-lg text-medical-gray mb-6">
              За годы работы мы стали одним из ведущих поставщиков косметологического оборудования в России, 
              установив более 1000 аппаратов в клиниках по всей стране.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-medical-green text-white px-4 py-2">
                <Icon name="Award" className="mr-2" size={16} />
                Сертифицированный дистрибьютор
              </Badge>
              <Badge className="bg-medical-blue text-white px-4 py-2">
                <Icon name="Shield" className="mr-2" size={16} />
                ISO 9001:2015
              </Badge>
            </div>
          </div>
          <div>
            <img 
              src="/img/0271c0f2-23f0-4e82-9e0b-cda1229a010c.jpg" 
              alt="О компании" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">Наши ценности</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 border-medical-blue/20 hover:shadow-lg transition-shadow">
                <Icon name={value.icon} className="mx-auto mb-4 text-medical-blue" size={48} />
                <h3 className="font-bold text-lg text-medical-gray-dark mb-2">{value.title}</h3>
                <p className="text-medical-gray">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">Основные вехи</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-medical-blue/20"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="p-6 border-medical-blue/20">
                      <div className="text-2xl font-bold text-medical-blue mb-2">{milestone.year}</div>
                      <h3 className="font-bold text-lg text-medical-gray-dark mb-2">{milestone.title}</h3>
                      <p className="text-medical-gray">{milestone.description}</p>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-medical-blue rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">Наша команда</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-medical-blue/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-medical-blue">{member.name}</CardTitle>
                  <CardDescription className="font-semibold">{member.position}</CardDescription>
                  <Badge variant="outline" className="mx-auto">{member.experience}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-medical-gray">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-medical-blue to-medical-blue-light text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы стать нашим партнером?</h2>
          <p className="text-xl mb-6 opacity-90">
            Присоединяйтесь к сотням довольных клиентов по всей России
          </p>
          <Button size="lg" className="bg-white text-medical-blue hover:bg-gray-100">
            <Icon name="Phone" className="mr-2" size={20} />
            Связаться с нами
          </Button>
        </div>
      </div>
    </div>
  )
}

export default About