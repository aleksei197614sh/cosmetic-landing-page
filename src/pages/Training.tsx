import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Icon from "@/components/ui/icon"
import { useState } from "react"

const Training = () => {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null)

  const courses = [
    {
      id: 1,
      title: "Основы лазерной косметологии",
      category: "laser",
      level: "Начальный",
      duration: "16 часов",
      price: "25000",
      description: "Комплексный курс по работе с лазерным оборудованием для эпиляции и омоложения",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      modules: [
        "Физические основы лазерного излучения",
        "Типы лазеров и их применение",
        "Безопасность при работе с лазерами",
        "Практическая работа с оборудованием"
      ],
      certificate: true,
      online: false,
      maxStudents: 8,
      nextDate: "2024-02-15"
    },
    {
      id: 2,
      title: "RF-лифтинг: теория и практика",
      category: "rf",
      level: "Средний",
      duration: "12 часов",
      price: "20000",
      description: "Изучение радиочастотных технологий для подтяжки и омоложения кожи",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      modules: [
        "Принципы радиочастотного воздействия",
        "Показания и противопоказания",
        "Техники проведения процедур",
        "Работа с различными насадками"
      ],
      certificate: true,
      online: true,
      maxStudents: 12,
      nextDate: "2024-02-20"
    },
    {
      id: 3,
      title: "Инъекционная косметология",
      category: "injection",
      level: "Продвинутый",
      duration: "24 часа",
      price: "35000",
      description: "Профессиональный курс по инъекционным методикам в косметологии",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      modules: [
        "Анатомия лица и зоны инъекций",
        "Препараты и их свойства",
        "Техники введения",
        "Осложнения и их профилактика"
      ],
      certificate: true,
      online: false,
      maxStudents: 6,
      nextDate: "2024-03-01"
    },
    {
      id: 4,
      title: "IPL фотоомоложение",
      category: "ipl",
      level: "Начальный",
      duration: "8 часов",
      price: "15000",
      description: "Основы работы с IPL системами для фотоомоложения",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      modules: [
        "Принципы IPL технологии",
        "Настройка параметров",
        "Протоколы процедур",
        "Уход после процедур"
      ],
      certificate: true,
      online: true,
      maxStudents: 15,
      nextDate: "2024-02-25"
    },
    {
      id: 5,
      title: "HIFU терапия",
      category: "hifu",
      level: "Продвинутый",
      duration: "20 часов",
      price: "30000",
      description: "Высокоинтенсивный фокусированный ультразвук в косметологии",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      modules: [
        "Физика ультразвука",
        "Глубины воздействия",
        "Техника проведения",
        "Комбинированные методики"
      ],
      certificate: true,
      online: false,
      maxStudents: 10,
      nextDate: "2024-03-10"
    },
    {
      id: 6,
      title: "Техническое обслуживание оборудования",
      category: "technical",
      level: "Специальный",
      duration: "32 часа",
      price: "40000",
      description: "Курс для технических специалистов по обслуживанию медицинского оборудования",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      modules: [
        "Устройство медицинского оборудования",
        "Диагностика неисправностей",
        "Профилактическое обслуживание",
        "Ремонт и замена компонентов"
      ],
      certificate: true,
      online: false,
      maxStudents: 8,
      nextDate: "2024-03-15"
    }
  ]

  const instructors = [
    {
      name: "Анна Волкова",
      position: "Ведущий тренер",
      experience: "15 лет",
      specialization: "Лазерные технологии",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      achievements: ["Сертифицированный тренер", "Автор методик", "Международный эксперт"]
    },
    {
      name: "Дмитрий Соколов",
      position: "Технический эксперт",
      experience: "12 лет",
      specialization: "RF и HIFU технологии",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      achievements: ["Инженер-разработчик", "Консультант производителей", "Автор патентов"]
    },
    {
      name: "Елена Морозова",
      position: "Врач-косметолог",
      experience: "18 лет",
      specialization: "Инъекционная косметология",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      achievements: ["Кандидат медицинских наук", "Главный врач клиники", "Лектор конференций"]
    }
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Начальный": return "bg-green-100 text-green-800"
      case "Средний": return "bg-yellow-100 text-yellow-800"
      case "Продвинутый": return "bg-red-100 text-red-800"
      case "Специальный": return "bg-purple-100 text-purple-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-medical-blue/5 to-white">
      {/* Header */}
      <div className="bg-medical-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Обучение и сертификация</h1>
          <p className="text-xl opacity-90">Профессиональные курсы для работы с медицинским оборудованием</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center p-6 border-medical-blue/20">
            <div className="text-3xl font-bold text-medical-blue mb-2">500+</div>
            <div className="text-medical-gray">Обученных специалистов</div>
          </Card>
          <Card className="text-center p-6 border-medical-blue/20">
            <div className="text-3xl font-bold text-medical-blue mb-2">15</div>
            <div className="text-medical-gray">Программ обучения</div>
          </Card>
          <Card className="text-center p-6 border-medical-blue/20">
            <div className="text-3xl font-bold text-medical-blue mb-2">98%</div>
            <div className="text-medical-gray">Успешных сертификаций</div>
          </Card>
          <Card className="text-center p-6 border-medical-blue/20">
            <div className="text-3xl font-bold text-medical-blue mb-2">24/7</div>
            <div className="text-medical-gray">Поддержка выпускников</div>
          </Card>
        </div>

        {/* Courses */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
            Программы обучения
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map(course => (
              <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 border-medical-blue/20">
                <CardHeader>
                  <div className="relative">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <div className="absolute top-2 left-2 flex gap-2">
                      <Badge className={getLevelColor(course.level)}>
                        {course.level}
                      </Badge>
                      {course.online && (
                        <Badge className="bg-blue-100 text-blue-800">
                          Online
                        </Badge>
                      )}
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-medical-green text-white">
                        {parseInt(course.price).toLocaleString('ru-RU')} ₽
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-medical-blue">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center text-medical-gray">
                        <Icon name="Clock" className="mr-2" size={16} />
                        {course.duration}
                      </span>
                      <span className="flex items-center text-medical-gray">
                        <Icon name="Users" className="mr-2" size={16} />
                        До {course.maxStudents} чел.
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Icon name="Calendar" className="mr-2 text-medical-gray" size={16} />
                      <span className="text-medical-gray">Ближайший курс: {course.nextDate}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Программа курса:</h4>
                    <ul className="space-y-1">
                      {course.modules.slice(0, 3).map((module, index) => (
                        <li key={index} className="text-sm flex items-start">
                          <Icon name="Check" className="mr-2 mt-1 text-medical-green" size={14} />
                          {module}
                        </li>
                      ))}
                      {course.modules.length > 3 && (
                        <li className="text-sm text-medical-gray">
                          +{course.modules.length - 3} модулей
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-medical-blue hover:bg-medical-blue-dark"
                      onClick={() => setSelectedCourse(course.id)}
                    >
                      Записаться
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Instructors */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
            Наши преподаватели
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <Card key={index} className="text-center border-medical-blue/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img 
                    src={instructor.image} 
                    alt={instructor.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-medical-blue">{instructor.name}</CardTitle>
                  <CardDescription className="font-semibold">{instructor.position}</CardDescription>
                  <div className="flex justify-center gap-2 mt-2">
                    <Badge variant="outline">{instructor.experience}</Badge>
                    <Badge variant="outline">{instructor.specialization}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {instructor.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center text-sm">
                        <Icon name="Award" className="mr-2 text-medical-green" size={14} />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-16">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
            Преимущества обучения у нас
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="p-4 bg-medical-blue/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" className="text-medical-blue" size={32} />
              </div>
              <h3 className="font-bold text-lg text-medical-gray-dark mb-2">Сертификация</h3>
              <p className="text-medical-gray">Официальные сертификаты с международным признанием</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-medical-green/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" className="text-medical-green" size={32} />
              </div>
              <h3 className="font-bold text-lg text-medical-gray-dark mb-2">Малые группы</h3>
              <p className="text-medical-gray">Индивидуальный подход к каждому студенту</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-medical-blue/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Laptop" className="text-medical-blue" size={32} />
              </div>
              <h3 className="font-bold text-lg text-medical-gray-dark mb-2">Практика</h3>
              <p className="text-medical-gray">Работа на реальном оборудовании</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-medical-green/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Headphones" className="text-medical-green" size={32} />
              </div>
              <h3 className="font-bold text-lg text-medical-gray-dark mb-2">Поддержка</h3>
              <p className="text-medical-gray">Консультации после окончания курса</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-medical-blue to-medical-blue-light text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать обучение?</h2>
          <p className="text-xl mb-6 opacity-90">
            Выберите подходящий курс и станьте сертифицированным специалистом
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-medical-blue hover:bg-gray-100">
              <Icon name="BookOpen" className="mr-2" size={20} />
              Выбрать курс
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-medical-blue">
              <Icon name="Phone" className="mr-2" size={20} />
              Консультация
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Training