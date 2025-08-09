import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Icon from "@/components/ui/icon"
import { useState } from "react"

const News = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const news = [
    {
      id: 1,
      title: "Новое поколение лазеров DiodeLux Pro Max поступило в продажу",
      category: "products",
      date: "2024-01-15",
      author: "Редакция МедКосмет",
      excerpt: "Представляем революционную лазерную систему с улучшенными характеристиками и новыми возможностями",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      readTime: "3 мин",
      tags: ["лазеры", "новинки", "оборудование"]
    },
    {
      id: 2,
      title: "Участие в выставке INTERCHARM Professional 2024",
      category: "events",
      date: "2024-01-10",
      author: "Отдел маркетинга",
      excerpt: "Приглашаем посетить наш стенд на крупнейшей выставке индустрии красоты в России",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      readTime: "2 мин",
      tags: ["выставки", "события", "INTERCHARM"]
    },
    {
      id: 3,
      title: "Обновление программы обучения по RF-технологиям",
      category: "education",
      date: "2024-01-08",
      author: "Анна Волкова",
      excerpt: "Расширили программу курсов по радиочастотным технологиям с учетом последних достижений",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      readTime: "4 мин",
      tags: ["обучение", "RF", "курсы"]
    },
    {
      id: 4,
      title: "Получен сертификат ISO 13485:2016 нового образца",
      category: "company",
      date: "2024-01-05",
      author: "Служба качества",
      excerpt: "Подтверждено соответствие системы менеджмента качества международным стандартам",
      image: "/img/0271c0f2-23f0-4e82-9e0b-cda1229a010c.jpg",
      readTime: "2 мин",
      tags: ["сертификация", "качество", "ISO"]
    },
    {
      id: 5,
      title: "Запуск программы лизинга оборудования",
      category: "finance",
      date: "2024-01-03",
      author: "Финансовый отдел",
      excerpt: "Теперь доступны гибкие условия финансирования для приобретения медицинского оборудования",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      readTime: "3 мин",
      tags: ["лизинг", "финансирование", "услуги"]
    },
    {
      id: 6,
      title: "Открытие нового сервисного центра в Екатеринбурге",
      category: "company",
      date: "2023-12-28",
      author: "Служба развития",
      excerpt: "Расширяем географию присутствия для лучшего обслуживания клиентов в Уральском регионе",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      readTime: "2 мин",
      tags: ["сервис", "расширение", "Екатеринбург"]
    },
    {
      id: 7,
      title: "Исследование эффективности HIFU-терапии",
      category: "research",
      date: "2023-12-25",
      author: "Научный отдел",
      excerpt: "Опубликованы результаты клинических исследований эффективности HIFU-технологий",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      readTime: "5 мин",
      tags: ["исследования", "HIFU", "клинические данные"]
    },
    {
      id: 8,
      title: "Партнерство с ведущими европейскими производителями",
      category: "company",
      date: "2023-12-20",
      author: "Отдел закупок",
      excerpt: "Заключены эксклюзивные договоры на поставку инновационного оборудования",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      readTime: "3 мин",
      tags: ["партнерство", "Европа", "эксклюзив"]
    }
  ]

  const categories = [
    { value: "all", label: "Все категории" },
    { value: "products", label: "Продукты" },
    { value: "events", label: "События" },
    { value: "education", label: "Обучение" },
    { value: "company", label: "Компания" },
    { value: "finance", label: "Финансы" },
    { value: "research", label: "Исследования" }
  ]

  const filteredNews = news.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter
    
    return matchesSearch && matchesCategory
  })

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "products": return "bg-blue-100 text-blue-800"
      case "events": return "bg-green-100 text-green-800"
      case "education": return "bg-purple-100 text-purple-800"
      case "company": return "bg-orange-100 text-orange-800"
      case "finance": return "bg-yellow-100 text-yellow-800"
      case "research": return "bg-red-100 text-red-800"
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

  const featuredNews = news.slice(0, 3)
  const regularNews = news.slice(3)

  return (
    <div className="min-h-screen bg-gradient-to-b from-medical-blue/5 to-white">
      {/* Header */}
      <div className="bg-medical-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Новости и события</h1>
          <p className="text-xl opacity-90">Последние новости из мира медицинских технологий</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Featured News */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-medical-gray-dark mb-8">Главные новости</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredNews.map((item, index) => (
              <Card key={item.id} className={`group hover:shadow-xl transition-all duration-300 border-medical-blue/20 ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                <CardHeader className="p-0">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className={`w-full object-cover rounded-t-lg ${index === 0 ? 'h-64' : 'h-48'}`}
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className={getCategoryColor(item.category)}>
                        {getCategoryLabel(item.category)}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <CardTitle className={`text-medical-blue hover:text-medical-blue-dark transition-colors cursor-pointer ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
                      {item.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-base">
                      {item.excerpt}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 px-6 pb-6">
                  <div className="flex items-center justify-between text-sm text-medical-gray">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center">
                        <Icon name="Calendar" className="mr-1" size={14} />
                        {formatDate(item.date)}
                      </span>
                      <span className="flex items-center">
                        <Icon name="Clock" className="mr-1" size={14} />
                        {item.readTime}
                      </span>
                    </div>
                    <span className="flex items-center">
                      <Icon name="User" className="mr-1" size={14} />
                      {item.author}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Поиск новостей</label>
              <Input
                placeholder="Поиск по заголовку или содержанию..."
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

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredNews.map(item => (
            <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 border-medical-blue/20">
              <CardHeader className="p-0">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(item.category)}>
                      {getCategoryLabel(item.category)}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <CardTitle className="text-medical-blue hover:text-medical-blue-dark transition-colors cursor-pointer">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="mt-2">
                    {item.excerpt}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-0 px-6 pb-6">
                <div className="flex items-center justify-between text-sm text-medical-gray mb-4">
                  <span className="flex items-center">
                    <Icon name="Calendar" className="mr-1" size={14} />
                    {formatDate(item.date)}
                  </span>
                  <span className="flex items-center">
                    <Icon name="Clock" className="mr-1" size={14} />
                    {item.readTime}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 2).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                  {item.tags.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{item.tags.length - 2}
                    </Badge>
                  )}
                </div>
                <Button className="w-full bg-medical-blue hover:bg-medical-blue-dark">
                  Читать далее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-medical-blue to-medical-blue-light text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Подпишитесь на новости</h2>
          <p className="text-xl mb-6 opacity-90">
            Получайте последние новости и обновления прямо на почту
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              placeholder="Ваш email" 
              className="bg-white text-gray-900 border-0"
            />
            <Button className="bg-white text-medical-blue hover:bg-gray-100">
              <Icon name="Mail" className="mr-2" size={20} />
              Подписаться
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News