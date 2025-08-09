import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import Icon from "@/components/ui/icon"
import { useState } from "react"

const Events = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [registrationForm, setRegistrationForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    eventId: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Регистрация на мероприятие:', registrationForm)
  }

  const upcomingEvents = [
    {
      id: 1,
      title: "Конференция 'Инновации в эстетической медицине 2024'",
      type: "conference",
      date: "2024-03-15",
      time: "10:00-18:00",
      location: "Отель 'Метрополь', Москва",
      description: "Ведущие эксперты расскажут о последних достижениях в области эстетической медицины",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      speakers: ["Анна Волкова", "Дмитрий Соколов", "Елена Морозова"],
      topics: ["Лазерные технологии", "RF-лифтинг", "HIFU терапия", "Безопасность процедур"],
      price: "Бесплатно",
      capacity: 200,
      registered: 156,
      featured: true
    },
    {
      id: 2,
      title: "Мастер-класс по лазерной эпиляции",
      type: "workshop",
      date: "2024-02-28",
      time: "14:00-17:00",
      location: "Учебный центр МедКосмет, Москва",
      description: "Практический мастер-класс по современным методикам лазерной эпиляции",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      speakers: ["Анна Волкова"],
      topics: ["Типы лазеров", "Параметры процедур", "Работа с разными фототипами"],
      price: "5 000 ₽",
      capacity: 15,
      registered: 12,
      featured: false
    },
    {
      id: 3,
      title: "Выставка INTERCHARM Professional 2024",
      type: "exhibition",
      date: "2024-04-10",
      time: "10:00-19:00",
      location: "Крокус Экспо, Москва",
      description: "Участие в крупнейшей выставке индустрии красоты",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      speakers: ["Команда МедКосмет"],
      topics: ["Новинки оборудования", "Демонстрации", "Консультации"],
      price: "Бесплатно",
      capacity: 1000,
      registered: 0,
      featured: true
    },
    {
      id: 4,
      title: "Вебинар 'RF-технологии в косметологии'",
      type: "webinar",
      date: "2024-02-20",
      time: "15:00-16:30",
      location: "Онлайн",
      description: "Обзор современных RF-технологий и их применения в косметологии",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      speakers: ["Дмитрий Соколов"],
      topics: ["Принципы RF", "Виды RF-систем", "Протоколы процедур"],
      price: "Бесплатно",
      capacity: 100,
      registered: 67,
      featured: false
    },
    {
      id: 5,
      title: "Семинар по HIFU-терапии",
      type: "seminar",
      date: "2024-03-05",
      time: "11:00-15:00",
      location: "Конференц-зал 'Космос', СПб",
      description: "Углубленное изучение технологии высокоинтенсивного фокусированного ультразвука",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      speakers: ["Михаил Петров", "Елена Морозова"],
      topics: ["Физика HIFU", "Показания и противопоказания", "Техника проведения"],
      price: "8 000 ₽",
      capacity: 25,
      registered: 18,
      featured: false
    },
    {
      id: 6,
      title: "День открытых дверей",
      type: "open-day",
      date: "2024-02-25",
      time: "10:00-16:00",
      location: "Офис МедКосмет, Москва",
      description: "Знакомство с компанией, демонстрация оборудования, консультации экспертов",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      speakers: ["Вся команда"],
      topics: ["Обзор продукции", "Демонстрации", "Индивидуальные консультации"],
      price: "Бесплатно",
      capacity: 50,
      registered: 23,
      featured: false
    }
  ]

  const pastEvents = [
    {
      id: 7,
      title: "Конференция 'Лазерные технологии 2023'",
      date: "2023-11-15",
      location: "Москва",
      participants: 180,
      materials: true
    },
    {
      id: 8,
      title: "Мастер-класс по IPL фотоомоложению",
      date: "2023-10-20",
      location: "Санкт-Петербург",
      participants: 20,
      materials: true
    },
    {
      id: 9,
      title: "Выставка Beauty Expo 2023",
      date: "2023-09-12",
      location: "Екатеринбург",
      participants: 500,
      materials: false
    }
  ]

  const eventTypes = [
    { value: "all", label: "Все мероприятия" },
    { value: "conference", label: "Конференции" },
    { value: "workshop", label: "Мастер-классы" },
    { value: "exhibition", label: "Выставки" },
    { value: "webinar", label: "Вебинары" },
    { value: "seminar", label: "Семинары" },
    { value: "open-day", label: "Дни открытых дверей" }
  ]

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "conference": return "bg-blue-100 text-blue-800"
      case "workshop": return "bg-green-100 text-green-800"
      case "exhibition": return "bg-purple-100 text-purple-800"
      case "webinar": return "bg-orange-100 text-orange-800"
      case "seminar": return "bg-yellow-100 text-yellow-800"
      case "open-day": return "bg-pink-100 text-pink-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getEventTypeLabel = (type: string) => {
    const eventType = eventTypes.find(t => t.value === type)
    return eventType ? eventType.label : type
  }

  const getEventIcon = (type: string) => {
    switch (type) {
      case "conference": return "Users"
      case "workshop": return "Wrench"
      case "exhibition": return "Building"
      case "webinar": return "Monitor"
      case "seminar": return "BookOpen"
      case "open-day": return "Home"
      default: return "Calendar"
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatTime = (timeString: string) => {
    return timeString
  }

  const getRegistrationStatus = (registered: number, capacity: number) => {
    const percentage = (registered / capacity) * 100
    if (percentage >= 90) return { status: "Почти заполнено", color: "bg-red-100 text-red-800" }
    if (percentage >= 70) return { status: "Активная регистрация", color: "bg-yellow-100 text-yellow-800" }
    return { status: "Открыта регистрация", color: "bg-green-100 text-green-800" }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-medical-blue/5 to-white">
      {/* Header */}
      <div className="bg-medical-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Мероприятия и события</h1>
          <p className="text-xl opacity-90">Конференции, мастер-классы и выставки в сфере медицинских технологий</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Featured Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
            Рекомендуемые мероприятия
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {upcomingEvents.filter(event => event.featured).map(event => (
              <Card key={event.id} className="border-medical-blue/20 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className={getEventTypeColor(event.type)}>
                      {getEventTypeLabel(event.type)}
                    </Badge>
                    <Badge className="bg-red-500 text-white">
                      Рекомендуем
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className={getRegistrationStatus(event.registered, event.capacity).color}>
                      {getRegistrationStatus(event.registered, event.capacity).status}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-medical-blue text-xl">{event.title}</CardTitle>
                  <CardDescription className="text-base">{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <Icon name="Calendar" className="mr-2 text-medical-gray" size={16} />
                      <span className="text-medical-gray">{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Clock" className="mr-2 text-medical-gray" size={16} />
                      <span className="text-medical-gray">{formatTime(event.time)}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="MapPin" className="mr-2 text-medical-gray" size={16} />
                      <span className="text-medical-gray">{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Users" className="mr-2 text-medical-gray" size={16} />
                      <span className="text-medical-gray">
                        {event.registered} из {event.capacity} участников
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Tag" className="mr-2 text-medical-gray" size={16} />
                      <span className="text-medical-green font-semibold">{event.price}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Темы:</h4>
                    <div className="flex flex-wrap gap-2">
                      {event.topics.slice(0, 3).map((topic, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {event.topics.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{event.topics.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-medical-blue hover:bg-medical-blue-dark"
                      onClick={() => setRegistrationForm({...registrationForm, eventId: event.id.toString()})}
                    >
                      <Icon name="UserPlus" className="mr-2" size={16} />
                      Зарегистрироваться
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Icon name="Info" className="mr-2" size={16} />
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* All Events */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-medical-gray-dark mb-6">Все предстоящие мероприятия</h2>
            <div className="space-y-6">
              {upcomingEvents.map(event => (
                <Card key={event.id} className="border-medical-blue/20 hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className={getEventTypeColor(event.type)}>
                          <Icon name={getEventIcon(event.type)} className="mr-1" size={14} />
                          {getEventTypeLabel(event.type)}
                        </Badge>
                        {event.featured && (
                          <Badge className="bg-red-500 text-white">Рекомендуем</Badge>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-medical-blue mb-3">{event.title}</h3>
                      <p className="text-medical-gray mb-4">{event.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <Icon name="Calendar" className="mr-2 text-medical-gray" size={14} />
                            {formatDate(event.date)}
                          </div>
                          <div className="flex items-center text-sm">
                            <Icon name="Clock" className="mr-2 text-medical-gray" size={14} />
                            {formatTime(event.time)}
                          </div>
                          <div className="flex items-center text-sm">
                            <Icon name="MapPin" className="mr-2 text-medical-gray" size={14} />
                            {event.location}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <Icon name="Users" className="mr-2 text-medical-gray" size={14} />
                            {event.registered}/{event.capacity} участников
                          </div>
                          <div className="flex items-center text-sm">
                            <Icon name="Tag" className="mr-2 text-medical-gray" size={14} />
                            <span className="text-medical-green font-semibold">{event.price}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Icon name="User" className="mr-2 text-medical-gray" size={14} />
                            {event.speakers.join(", ")}
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button className="bg-medical-blue hover:bg-medical-blue-dark">
                          Зарегистрироваться
                        </Button>
                        <Button variant="outline">
                          Подробнее
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Registration Form */}
            <Card className="border-medical-blue/20">
              <CardHeader>
                <CardTitle className="text-medical-blue flex items-center">
                  <Icon name="UserPlus" className="mr-2" size={24} />
                  Быстрая регистрация
                </CardTitle>
                <CardDescription>
                  Зарегистрируйтесь на мероприятие
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">ФИО *</Label>
                    <Input 
                      id="name" 
                      placeholder="Ваше имя"
                      value={registrationForm.name}
                      onChange={(e) => setRegistrationForm({...registrationForm, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com"
                      value={registrationForm.email}
                      onChange={(e) => setRegistrationForm({...registrationForm, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+7 (999) 123-45-67"
                      value={registrationForm.phone}
                      onChange={(e) => setRegistrationForm({...registrationForm, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Компания</Label>
                    <Input 
                      id="company" 
                      placeholder="Название клиники"
                      value={registrationForm.company}
                      onChange={(e) => setRegistrationForm({...registrationForm, company: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Должность</Label>
                    <Input 
                      id="position" 
                      placeholder="Врач-косметолог"
                      value={registrationForm.position}
                      onChange={(e) => setRegistrationForm({...registrationForm, position: e.target.value})}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-medical-blue hover:bg-medical-blue-dark"
                  >
                    <Icon name="Send" className="mr-2" size={16} />
                    Зарегистрироваться
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Calendar */}
            <Card className="border-medical-blue/20">
              <CardHeader>
                <CardTitle className="text-medical-blue">Календарь событий</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            {/* Past Events */}
            <Card className="border-medical-blue/20">
              <CardHeader>
                <CardTitle className="text-medical-blue">Прошедшие мероприятия</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {pastEvents.map(event => (
                  <div key={event.id} className="border-b border-gray-100 pb-4 last:border-b-0">
                    <h4 className="font-semibold text-medical-gray-dark mb-2">{event.title}</h4>
                    <div className="space-y-1 text-sm text-medical-gray">
                      <div className="flex items-center">
                        <Icon name="Calendar" className="mr-2" size={12} />
                        {formatDate(event.date)}
                      </div>
                      <div className="flex items-center">
                        <Icon name="MapPin" className="mr-2" size={12} />
                        {event.location}
                      </div>
                      <div className="flex items-center">
                        <Icon name="Users" className="mr-2" size={12} />
                        {event.participants} участников
                      </div>
                    </div>
                    {event.materials && (
                      <Button variant="ghost" size="sm" className="mt-2 p-0 h-auto text-medical-blue">
                        <Icon name="Download" className="mr-1" size={12} />
                        Скачать материалы
                      </Button>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Event Benefits */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-16">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
            Преимущества участия
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="p-4 bg-medical-blue/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="BookOpen" className="text-medical-blue" size={32} />
              </div>
              <h3 className="font-bold text-lg text-medical-gray-dark mb-2">Новые знания</h3>
              <p className="text-medical-gray">Изучение последних технологий и методик</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-medical-green/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" className="text-medical-green" size={32} />
              </div>
              <h3 className="font-bold text-lg text-medical-gray-dark mb-2">Нетворкинг</h3>
              <p className="text-medical-gray">Знакомство с коллегами и экспертами</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-medical-blue/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" className="text-medical-blue" size={32} />
              </div>
              <h3 className="font-bold text-lg text-medical-gray-dark mb-2">Сертификаты</h3>
              <p className="text-medical-gray">Получение сертификатов участия</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-medical-green/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Gift" className="text-medical-green" size={32} />
              </div>
              <h3 className="font-bold text-lg text-medical-gray-dark mb-2">Бонусы</h3>
              <p className="text-medical-gray">Специальные предложения для участников</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-medical-blue to-medical-blue-light text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Не пропустите важные события!</h2>
          <p className="text-xl mb-6 opacity-90">
            Подпишитесь на уведомления о новых мероприятиях
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              placeholder="Ваш email" 
              className="bg-white text-gray-900 border-0"
            />
            <Button className="bg-white text-medical-blue hover:bg-gray-100">
              <Icon name="Bell" className="mr-2" size={20} />
              Подписаться
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events