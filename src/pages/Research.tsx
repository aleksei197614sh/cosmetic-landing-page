import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import Icon from "@/components/ui/icon"
import { useState } from "react"

const Research = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const researchProjects = [
    {
      id: 1,
      title: "Эффективность диодных лазеров 808nm в лечении гирсутизма",
      category: "clinical",
      status: "completed",
      duration: "12 месяцев",
      participants: 150,
      startDate: "2023-01-15",
      endDate: "2024-01-15",
      description: "Клиническое исследование эффективности лазерной эпиляции у пациентов с гирсутизмом",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      results: {
        efficacy: 95,
        satisfaction: 92,
        sideEffects: 3
      },
      publications: 2,
      equipment: "DiodeLux Pro",
      leadResearcher: "Анна Волкова"
    },
    {
      id: 2,
      title: "Сравнительный анализ RF-технологий для лифтинга кожи",
      category: "comparative",
      status: "ongoing",
      duration: "18 месяцев",
      participants: 200,
      startDate: "2023-06-01",
      endDate: "2024-12-01",
      description: "Сравнение эффективности различных RF-технологий в коррекции возрастных изменений",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      results: {
        efficacy: 0,
        satisfaction: 0,
        sideEffects: 0
      },
      publications: 0,
      equipment: "ThermaLift RF",
      leadResearcher: "Дмитрий Соколов"
    },
    {
      id: 3,
      title: "Безопасность HIFU-терапии: долгосрочные наблюдения",
      category: "safety",
      status: "completed",
      duration: "24 месяца",
      participants: 300,
      startDate: "2022-01-01",
      endDate: "2023-12-31",
      description: "Долгосрочное исследование безопасности и эффективности HIFU-терапии",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      results: {
        efficacy: 88,
        satisfaction: 90,
        sideEffects: 5
      },
      publications: 3,
      equipment: "HIFU UltraLift",
      leadResearcher: "Елена Морозова"
    },
    {
      id: 4,
      title: "Оптимизация параметров IPL для лечения розацеа",
      category: "optimization",
      status: "planning",
      duration: "15 месяцев",
      participants: 100,
      startDate: "2024-03-01",
      endDate: "2025-06-01",
      description: "Исследование оптимальных параметров IPL-терапии для лечения розацеа",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      results: {
        efficacy: 0,
        satisfaction: 0,
        sideEffects: 0
      },
      publications: 0,
      equipment: "PhotoMax IPL",
      leadResearcher: "Михаил Петров"
    },
    {
      id: 5,
      title: "Экономическая эффективность криолиполиза",
      category: "economic",
      status: "ongoing",
      duration: "12 месяцев",
      participants: 80,
      startDate: "2023-09-01",
      endDate: "2024-09-01",
      description: "Анализ экономической эффективности процедур криолиполиза для клиник",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      results: {
        efficacy: 0,
        satisfaction: 0,
        sideEffects: 0
      },
      publications: 0,
      equipment: "CoolSculpt Pro",
      leadResearcher: "Ольга Смирнова"
    },
    {
      id: 6,
      title: "Инновационные методики мезотерапии без игл",
      category: "innovation",
      status: "completed",
      duration: "8 месяцев",
      participants: 120,
      startDate: "2023-03-01",
      endDate: "2023-11-01",
      description: "Разработка новых протоколов безыгольной мезотерапии",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      results: {
        efficacy: 85,
        satisfaction: 94,
        sideEffects: 1
      },
      publications: 1,
      equipment: "MesoJet Pro",
      leadResearcher: "Сергей Иванов"
    }
  ]

  const publications = [
    {
      title: "Диодные лазеры в лечении гирсутизма: результаты многоцентрового исследования",
      journal: "Российский журнал кожных и венерических болезней",
      year: "2024",
      authors: ["А.В. Волкова", "Д.С. Соколов", "Е.М. Морозова"],
      doi: "10.17116/rosjderm202024011",
      downloads: 450
    },
    {
      title: "Безопасность HIFU-терапии: анализ 300 случаев",
      journal: "Эстетическая медицина",
      year: "2024",
      authors: ["Е.М. Морозова", "М.П. Петров"],
      doi: "10.25208/em2024012",
      downloads: 320
    },
    {
      title: "Инновационные подходы в мезотерапии: безыгольные технологии",
      journal: "Косметология и пластическая хирургия",
      year: "2023",
      authors: ["С.И. Иванов", "А.В. Волкова"],
      doi: "10.18821/kps2023015",
      downloads: 280
    }
  ]

  const categories = [
    { value: "all", label: "Все исследования" },
    { value: "clinical", label: "Клинические исследования" },
    { value: "comparative", label: "Сравнительные исследования" },
    { value: "safety", label: "Исследования безопасности" },
    { value: "optimization", label: "Оптимизация параметров" },
    { value: "economic", label: "Экономические исследования" },
    { value: "innovation", label: "Инновационные методики" }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800"
      case "ongoing": return "bg-blue-100 text-blue-800"
      case "planning": return "bg-yellow-100 text-yellow-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed": return "Завершено"
      case "ongoing": return "В процессе"
      case "planning": return "Планируется"
      default: return status
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "clinical": return "bg-blue-100 text-blue-800"
      case "comparative": return "bg-green-100 text-green-800"
      case "safety": return "bg-red-100 text-red-800"
      case "optimization": return "bg-purple-100 text-purple-800"
      case "economic": return "bg-yellow-100 text-yellow-800"
      case "innovation": return "bg-pink-100 text-pink-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getCategoryLabel = (category: string) => {
    const cat = categories.find(c => c.value === category)
    return cat ? cat.label : category
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const filteredProjects = researchProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.equipment.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || project.category === categoryFilter
    
    return matchesSearch && matchesCategory
  })

  const getProgressPercentage = (startDate: string, endDate: string, status: string) => {
    if (status === "completed") return 100
    if (status === "planning") return 0
    
    const start = new Date(startDate).getTime()
    const end = new Date(endDate).getTime()
    const now = new Date().getTime()
    
    const progress = ((now - start) / (end - start)) * 100
    return Math.max(0, Math.min(100, progress))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-medical-blue/5 to-white">
      {/* Header */}
      <div className="bg-medical-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Исследования и разработки</h1>
          <p className="text-xl opacity-90">Научные исследования эффективности медицинского оборудования</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Research Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center p-6 border-medical-blue/20">
            <Icon name="FlaskConical" className="mx-auto mb-4 text-medical-blue" size={40} />
            <div className="text-3xl font-bold text-medical-blue mb-2">15+</div>
            <div className="text-medical-gray">Активных исследований</div>
          </Card>
          <Card className="text-center p-6 border-medical-blue/20">
            <Icon name="Users" className="mx-auto mb-4 text-medical-blue" size={40} />
            <div className="text-3xl font-bold text-medical-blue mb-2">1000+</div>
            <div className="text-medical-gray">Участников</div>
          </Card>
          <Card className="text-center p-6 border-medical-blue/20">
            <Icon name="FileText" className="mx-auto mb-4 text-medical-blue" size={40} />
            <div className="text-3xl font-bold text-medical-blue mb-2">25+</div>
            <div className="text-medical-gray">Публикаций</div>
          </Card>
          <Card className="text-center p-6 border-medical-blue/20">
            <Icon name="Award" className="mx-auto mb-4 text-medical-blue" size={40} />
            <div className="text-3xl font-bold text-medical-blue mb-2">5+</div>
            <div className="text-medical-gray">Наград</div>
          </Card>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Поиск исследований</label>
              <Input
                placeholder="Поиск по названию, описанию или оборудованию..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Категория</label>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Research Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
            Текущие исследования
          </h2>
          <div className="space-y-8">
            {filteredProjects.map(project => (
              <Card key={project.id} className="border-medical-blue/20 hover:shadow-lg transition-shadow">
                <div className="lg:flex">
                  <div className="lg:w-1/3">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"
                    />
                  </div>
                  <div className="lg:w-2/3 p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className={getCategoryColor(project.category)}>
                        {getCategoryLabel(project.category)}
                      </Badge>
                      <Badge className={getStatusColor(project.status)}>
                        {getStatusLabel(project.status)}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold text-medical-blue mb-3">{project.title}</h3>
                    <p className="text-medical-gray mb-4">{project.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-3">
                        <div className="flex items-center text-sm">
                          <Icon name="Calendar" className="mr-2 text-medical-gray" size={16} />
                          <span>Начало: {formatDate(project.startDate)}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Icon name="CalendarCheck" className="mr-2 text-medical-gray" size={16} />
                          <span>Окончание: {formatDate(project.endDate)}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Icon name="Users" className="mr-2 text-medical-gray" size={16} />
                          <span>Участников: {project.participants}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Icon name="User" className="mr-2 text-medical-gray" size={16} />
                          <span>Руководитель: {project.leadResearcher}</span>
                        </div>
                      </div>
                      
                      {project.status === "completed" && (
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Эффективность</span>
                              <span>{project.results.efficacy}%</span>
                            </div>
                            <Progress value={project.results.efficacy} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Удовлетворенность</span>
                              <span>{project.results.satisfaction}%</span>
                            </div>
                            <Progress value={project.results.satisfaction} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Побочные эффекты</span>
                              <span>{project.results.sideEffects}%</span>
                            </div>
                            <Progress value={project.results.sideEffects} className="h-2" />
                          </div>
                        </div>
                      )}
                      
                      {project.status === "ongoing" && (
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Прогресс исследования</span>
                            <span>{Math.round(getProgressPercentage(project.startDate, project.endDate, project.status))}%</span>
                          </div>
                          <Progress value={getProgressPercentage(project.startDate, project.endDate, project.status)} className="h-3" />
                          <p className="text-xs text-medical-gray mt-2">
                            Ожидаемое завершение: {formatDate(project.endDate)}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="outline" className="text-medical-blue border-medical-blue">
                        {project.equipment}
                      </Badge>
                      {project.publications > 0 && (
                        <Badge variant="outline" className="text-medical-green border-medical-green">
                          {project.publications} публикаций
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button className="bg-medical-blue hover:bg-medical-blue-dark">
                        <Icon name="FileText" className="mr-2" size={16} />
                        Подробнее
                      </Button>
                      {project.status === "completed" && (
                        <Button variant="outline">
                          <Icon name="Download" className="mr-2" size={16} />
                          Результаты
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
            Научные публикации
          </h2>
          <div className="space-y-6">
            {publications.map((publication, index) => (
              <Card key={index} className="border-medical-blue/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-medical-blue mb-2">{publication.title}</h3>
                      <p className="text-medical-gray mb-2">
                        <span className="font-semibold">{publication.journal}</span> • {publication.year}
                      </p>
                      <p className="text-sm text-medical-gray mb-3">
                        Авторы: {publication.authors.join(", ")}
                      </p>
                      <p className="text-xs text-medical-gray">
                        DOI: {publication.doi}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-medical-green text-white mb-2">
                        {publication.downloads} скачиваний
                      </Badge>
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-medical-blue hover:bg-medical-blue-dark">
                          <Icon name="Download" className="mr-1" size={14} />
                          PDF
                        </Button>
                        <Button size="sm" variant="outline">
                          <Icon name="ExternalLink" className="mr-1" size={14} />
                          DOI
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Methodology */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-16">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
            Наша методология
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="p-4 bg-medical-blue/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" className="text-medical-blue" size={32} />
              </div>
              <h3 className="font-bold text-lg text-medical-gray-dark mb-2">Четкие цели</h3>
              <p className="text-medical-gray">Определение конкретных задач и ожидаемых результатов</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-medical-green/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" className="text-medical-green" size={32} />
              </div>
              <h3 className="font-bold text-lg text-medical-gray-dark mb-2">Репрезентативная выборка</h3>
              <p className="text-medical-gray">Достаточное количество участников для статистической значимости</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-medical-blue/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="text-medical-blue" size={32} />
              </div>
              <h3 className="font-bold text-lg text-medical-gray-dark mb-2">Этические стандарты</h3>
              <p className="text-medical-gray">Соблюдение всех этических норм и требований безопасности</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-medical-green/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="BarChart" className="text-medical-green" size={32} />
              </div>
              <h3 className="font-bold text-lg text-medical-gray-dark mb-2">Статистический анализ</h3>
              <p className="text-medical-gray">Применение современных методов статистического анализа</p>
            </div>
          </div>
        </div>

        {/* Collaboration */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
            Партнеры по исследованиям
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "МГУ им. Ломоносова", type: "Университет" },
              { name: "РНИМУ им. Пирогова", type: "Медицинский университет" },
              { name: "Институт лазерной медицины", type: "НИИ" },
              { name: "Центр эстетической медицины", type: "Клиника" }
            ].map((partner, index) => (
              <Card key={index} className="text-center p-6 border-medical-blue/20 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Building" className="text-medical-blue" size={24} />
                </div>
                <h3 className="font-bold text-medical-gray-dark mb-2">{partner.name}</h3>
                <Badge variant="outline">{partner.type}</Badge>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-medical-blue to-medical-blue-light text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Заинтересованы в сотрудничестве?</h2>
          <p className="text-xl mb-6 opacity-90">
            Присоединяйтесь к нашим исследованиям или предложите свой проект
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-medical-blue hover:bg-gray-100">
              <Icon name="FlaskConical" className="mr-2" size={20} />
              Предложить исследование
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-medical-blue">
              <Icon name="Users" className="mr-2" size={20} />
              Стать участником
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Research