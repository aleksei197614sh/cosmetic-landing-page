import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Icon from "@/components/ui/icon"
import { useState } from "react"

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [selectedImage, setSelectedImage] = useState<any>(null)

  const galleryItems = [
    {
      id: 1,
      title: "Лазерный аппарат DiodeLux Pro в работе",
      category: "equipment",
      type: "photo",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      description: "Процедура лазерной эпиляции на современном оборудовании",
      location: "Клиника 'Красота и Здоровье', Москва",
      date: "2024-01-15",
      tags: ["лазер", "эпиляция", "DiodeLux"]
    },
    {
      id: 2,
      title: "RF-лифтинг процедура",
      category: "procedures",
      type: "photo",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      description: "Радиочастотная подтяжка кожи лица",
      location: "Медицинский центр 'Эстетик', СПб",
      date: "2024-01-12",
      tags: ["RF", "лифтинг", "омоложение"]
    },
    {
      id: 3,
      title: "Обучение персонала",
      category: "training",
      type: "photo",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      description: "Практическое занятие по работе с IPL системой",
      location: "Учебный центр МедКосмет, Москва",
      date: "2024-01-10",
      tags: ["обучение", "IPL", "персонал"]
    },
    {
      id: 4,
      title: "Установка HIFU аппарата",
      category: "installation",
      type: "photo",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      description: "Процесс установки и настройки HIFU системы",
      location: "Центр эстетической медицины, Новосибирск",
      date: "2024-01-08",
      tags: ["HIFU", "установка", "настройка"]
    },
    {
      id: 5,
      title: "Выставка INTERCHARM 2024",
      category: "events",
      type: "photo",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      description: "Наш стенд на крупнейшей выставке индустрии красоты",
      location: "Крокус Экспо, Москва",
      date: "2024-01-05",
      tags: ["выставка", "INTERCHARM", "стенд"]
    },
    {
      id: 6,
      title: "Сертификаты качества",
      category: "certificates",
      type: "document",
      image: "/img/0271c0f2-23f0-4e82-9e0b-cda1229a010c.jpg",
      description: "Международные сертификаты соответствия",
      location: "Офис МедКосмет",
      date: "2024-01-03",
      tags: ["сертификаты", "качество", "ISO"]
    },
    {
      id: 7,
      title: "Мезотерапия без игл",
      category: "procedures",
      type: "photo",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      description: "Безыгольная мезотерапия на аппарате MesoJet",
      location: "Клиника 'Новая Эра', Екатеринбург",
      date: "2023-12-28",
      tags: ["мезотерапия", "безыгольная", "MesoJet"]
    },
    {
      id: 8,
      title: "Техническое обслуживание",
      category: "service",
      type: "photo",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      description: "Плановое ТО лазерного оборудования",
      location: "Клиника 'Дерма Плюс', Ростов-на-Дону",
      date: "2023-12-25",
      tags: ["сервис", "ТО", "обслуживание"]
    },
    {
      id: 9,
      title: "Криолиполиз процедура",
      category: "procedures",
      type: "photo",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      description: "Неинвазивное разрушение жировых клеток",
      location: "Сеть клиник 'Медэстетик', Казань",
      date: "2023-12-20",
      tags: ["криолиполиз", "похудение", "коррекция"]
    },
    {
      id: 10,
      title: "Новый офис в Екатеринбурге",
      category: "company",
      type: "photo",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      description: "Открытие регионального представительства",
      location: "Екатеринбург",
      date: "2023-12-15",
      tags: ["офис", "открытие", "Екатеринбург"]
    },
    {
      id: 11,
      title: "Конференция по эстетической медицине",
      category: "events",
      type: "photo",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      description: "Участие в профессиональной конференции",
      location: "Отель 'Метрополь', Москва",
      date: "2023-12-10",
      tags: ["конференция", "медицина", "выступление"]
    },
    {
      id: 12,
      title: "Результаты лазерного омоложения",
      category: "results",
      type: "photo",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      description: "До и после курса процедур лазерного омоложения",
      location: "Клиника 'Красота и Здоровье', Москва",
      date: "2023-12-05",
      tags: ["результаты", "омоложение", "до и после"]
    }
  ]

  const categories = [
    { value: "all", label: "Все категории" },
    { value: "equipment", label: "Оборудование" },
    { value: "procedures", label: "Процедуры" },
    { value: "training", label: "Обучение" },
    { value: "installation", label: "Установка" },
    { value: "events", label: "События" },
    { value: "certificates", label: "Сертификаты" },
    { value: "service", label: "Сервис" },
    { value: "company", label: "Компания" },
    { value: "results", label: "Результаты" }
  ]

  const filteredItems = galleryItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter
    
    return matchesSearch && matchesCategory
  })

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "equipment": return "bg-blue-100 text-blue-800"
      case "procedures": return "bg-green-100 text-green-800"
      case "training": return "bg-purple-100 text-purple-800"
      case "installation": return "bg-orange-100 text-orange-800"
      case "events": return "bg-yellow-100 text-yellow-800"
      case "certificates": return "bg-red-100 text-red-800"
      case "service": return "bg-indigo-100 text-indigo-800"
      case "company": return "bg-pink-100 text-pink-800"
      case "results": return "bg-teal-100 text-teal-800"
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "photo": return "Camera"
      case "video": return "Play"
      case "document": return "FileText"
      default: return "Image"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-medical-blue/5 to-white">
      {/* Header */}
      <div className="bg-medical-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Галерея</h1>
          <p className="text-xl opacity-90">Фотографии оборудования, процедур и мероприятий</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center p-6 border-medical-blue/20">
            <Icon name="Camera" className="mx-auto mb-4 text-medical-blue" size={40} />
            <div className="text-3xl font-bold text-medical-blue mb-2">200+</div>
            <div className="text-medical-gray">Фотографий</div>
          </Card>
          <Card className="text-center p-6 border-medical-blue/20">
            <Icon name="Play" className="mx-auto mb-4 text-medical-blue" size={40} />
            <div className="text-3xl font-bold text-medical-blue mb-2">50+</div>
            <div className="text-medical-gray">Видеороликов</div>
          </Card>
          <Card className="text-center p-6 border-medical-blue/20">
            <Icon name="MapPin" className="mx-auto mb-4 text-medical-blue" size={40} />
            <div className="text-3xl font-bold text-medical-blue mb-2">25+</div>
            <div className="text-medical-gray">Городов</div>
          </Card>
          <Card className="text-center p-6 border-medical-blue/20">
            <Icon name="Calendar" className="mx-auto mb-4 text-medical-blue" size={40} />
            <div className="text-3xl font-bold text-medical-blue mb-2">100+</div>
            <div className="text-medical-gray">Мероприятий</div>
          </Card>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Поиск</label>
              <Input
                placeholder="Поиск по названию или описанию..."
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

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredItems.map(item => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="group hover:shadow-xl transition-all duration-300 border-medical-blue/20 cursor-pointer overflow-hidden">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 flex gap-2">
                      <Badge className={getCategoryColor(item.category)}>
                        {getCategoryLabel(item.category)}
                      </Badge>
                    </div>
                    <div className="absolute top-2 right-2">
                      <div className="p-2 bg-black/50 rounded-full">
                        <Icon name={getTypeIcon(item.type)} className="text-white" size={16} />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <Icon name="ZoomIn" className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-medical-gray-dark mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-medical-gray mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-medical-gray">
                      <span className="flex items-center">
                        <Icon name="MapPin" className="mr-1" size={12} />
                        {item.location}
                      </span>
                      <span className="flex items-center">
                        <Icon name="Calendar" className="mr-1" size={12} />
                        {formatDate(item.date)}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle className="text-medical-blue">{item.title}</DialogTitle>
                </DialogHeader>
                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full rounded-lg object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Badge className={getCategoryColor(item.category)}>
                        {getCategoryLabel(item.category)}
                      </Badge>
                    </div>
                    <p className="text-medical-gray">{item.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Icon name="MapPin" className="mr-2 text-medical-gray" size={16} />
                        <span className="text-medical-gray">{item.location}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Icon name="Calendar" className="mr-2 text-medical-gray" size={16} />
                        <span className="text-medical-gray">{formatDate(item.date)}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Теги:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2 pt-4">
                      <Button className="flex-1 bg-medical-blue hover:bg-medical-blue-dark">
                        <Icon name="Download" className="mr-2" size={16} />
                        Скачать
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Icon name="Share2" className="mr-2" size={16} />
                        Поделиться
                      </Button>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" className="mx-auto mb-4 text-gray-400" size={48} />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Ничего не найдено</h3>
            <p className="text-gray-500">Попробуйте изменить параметры поиска</p>
          </div>
        )}

        {/* Categories Overview */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
            Категории галереи
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.slice(1).map((category, index) => {
              const itemCount = galleryItems.filter(item => item.category === category.value).length
              return (
                <Card key={index} className="text-center p-6 border-medical-blue/20 hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() => setCategoryFilter(category.value)}>
                  <div className={`p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 ${getCategoryColor(category.value)}`}>
                    <Icon name="Folder" size={24} />
                  </div>
                  <h3 className="font-bold text-medical-gray-dark mb-2">{category.label}</h3>
                  <p className="text-medical-gray">{itemCount} элементов</p>
                </Card>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-medical-blue to-medical-blue-light text-white rounded-xl p-8 mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Хотите увидеть больше?</h2>
          <p className="text-xl mb-6 opacity-90">
            Посетите наш офис или запросите демонстрацию оборудования
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-medical-blue hover:bg-gray-100">
              <Icon name="MapPin" className="mr-2" size={20} />
              Посетить офис
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-medical-blue">
              <Icon name="Play" className="mr-2" size={20} />
              Демонстрация
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery