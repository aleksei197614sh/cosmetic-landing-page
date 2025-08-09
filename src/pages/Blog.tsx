import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Icon from "@/components/ui/icon"
import { useState } from "react"

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const blogPosts = [
    {
      id: 1,
      title: "Тенденции в лазерной косметологии 2024",
      category: "trends",
      date: "2024-01-20",
      author: "Анна Волкова",
      excerpt: "Обзор последних достижений в области лазерных технологий для эстетической медицины",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      readTime: "8 мин",
      tags: ["лазеры", "тренды", "косметология"],
      featured: true
    },
    {
      id: 2,
      title: "Как выбрать RF-аппарат для клиники",
      category: "guides",
      date: "2024-01-18",
      author: "Дмитрий Соколов",
      excerpt: "Подробное руководство по выбору радиочастотного оборудования с учетом потребностей клиники",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      readTime: "12 мин",
      tags: ["RF", "выбор оборудования", "клиника"],
      featured: false
    },
    {
      id: 3,
      title: "Безопасность в косметологии: новые стандарты",
      category: "safety",
      date: "2024-01-15",
      author: "Елена Морозова",
      excerpt: "Анализ обновленных требований безопасности для косметологических процедур",
      image: "/img/0271c0f2-23f0-4e82-9e0b-cda1229a010c.jpg",
      readTime: "6 мин",
      tags: ["безопасность", "стандарты", "регулирование"],
      featured: false
    },
    {
      id: 4,
      title: "HIFU-терапия: принципы и применение",
      category: "technology",
      date: "2024-01-12",
      author: "Михаил Петров",
      excerpt: "Глубокий анализ технологии высокоинтенсивного фокусированного ультразвука",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      readTime: "10 мин",
      tags: ["HIFU", "ультразвук", "технологии"],
      featured: true
    },
    {
      id: 5,
      title: "Экономика косметологической клиники",
      category: "business",
      date: "2024-01-10",
      author: "Ольга Смирнова",
      excerpt: "Как рассчитать окупаемость оборудования и оптимизировать расходы клиники",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      readTime: "15 мин",
      tags: ["бизнес", "экономика", "окупаемость"],
      featured: false
    },
    {
      id: 6,
      title: "Обучение персонала: лучшие практики",
      category: "education",
      date: "2024-01-08",
      author: "Анна Волкова",
      excerpt: "Эффективные методы обучения медицинского персонала работе с новым оборудованием",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      readTime: "7 мин",
      tags: ["обучение", "персонал", "методики"],
      featured: false
    },
    {
      id: 7,
      title: "Инновации в области мезотерапии",
      category: "technology",
      date: "2024-01-05",
      author: "Сергей Иванов",
      excerpt: "Новые технологии безыгольной мезотерапии и их преимущества",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      readTime: "9 мин",
      tags: ["мезотерапия", "инновации", "безыгольная"],
      featured: false
    },
    {
      id: 8,
      title: "Сертификация медицинского оборудования в России",
      category: "regulation",
      date: "2024-01-03",
      author: "Юрий Козлов",
      excerpt: "Актуальные требования к сертификации и регистрации медицинских изделий",
      image: "/img/0271c0f2-23f0-4e82-9e0b-cda1229a010c.jpg",
      readTime: "11 мин",
      tags: ["сертификация", "регулирование", "Россия"],
      featured: false
    }
  ]

  const categories = [
    { value: "all", label: "Все категории" },
    { value: "trends", label: "Тренды" },
    { value: "guides", label: "Руководства" },
    { value: "technology", label: "Технологии" },
    { value: "business", label: "Бизнес" },
    { value: "education", label: "Обучение" },
    { value: "safety", label: "Безопасность" },
    { value: "regulation", label: "Регулирование" }
  ]

  const authors = [
    {
      name: "Анна Волкова",
      position: "Ведущий тренер",
      avatar: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      articles: 15,
      specialization: "Лазерные технологии"
    },
    {
      name: "Дмитрий Соколов",
      position: "Технический эксперт",
      avatar: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      articles: 12,
      specialization: "RF и HIFU"
    },
    {
      name: "Елена Морозова",
      position: "Врач-косметолог",
      avatar: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      articles: 8,
      specialization: "Безопасность процедур"
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || post.category === categoryFilter
    
    return matchesSearch && matchesCategory
  })

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "trends": return "bg-purple-100 text-purple-800"
      case "guides": return "bg-blue-100 text-blue-800"
      case "technology": return "bg-green-100 text-green-800"
      case "business": return "bg-orange-100 text-orange-800"
      case "education": return "bg-yellow-100 text-yellow-800"
      case "safety": return "bg-red-100 text-red-800"
      case "regulation": return "bg-gray-100 text-gray-800"
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

  const featuredPosts = filteredPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-b from-medical-blue/5 to-white">
      {/* Header */}
      <div className="bg-medical-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Блог экспертов</h1>
          <p className="text-xl opacity-90">Профессиональные статьи о медицинских технологиях</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-medical-gray-dark mb-8">Рекомендуемые статьи</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map(post => (
                <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 border-medical-blue/20 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className={getCategoryColor(post.category)}>
                        {getCategoryLabel(post.category)}
                      </Badge>
                      <Badge className="bg-red-500 text-white">
                        Рекомендуем
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-medical-blue hover:text-medical-blue-dark transition-colors cursor-pointer text-xl">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-medical-gray mb-4">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center">
                          <Icon name="Calendar" className="mr-1" size={14} />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center">
                          <Icon name="Clock" className="mr-1" size={14} />
                          {post.readTime}
                        </span>
                      </div>
                      <span className="flex items-center">
                        <Icon name="User" className="mr-1" size={14} />
                        {post.author}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full bg-medical-blue hover:bg-medical-blue-dark">
                      Читать статью
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Поиск статей</label>
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {regularPosts.map(post => (
                <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-medical-blue/20">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className={getCategoryColor(post.category)}>
                          {getCategoryLabel(post.category)}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-medical-blue hover:text-medical-blue-dark transition-colors cursor-pointer mb-3">
                        {post.title}
                      </h3>
                      <p className="text-medical-gray mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-medical-gray mb-4">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center">
                            <Icon name="Calendar" className="mr-1" size={14} />
                            {formatDate(post.date)}
                          </span>
                          <span className="flex items-center">
                            <Icon name="Clock" className="mr-1" size={14} />
                            {post.readTime}
                          </span>
                        </div>
                        <span className="flex items-center">
                          <Icon name="User" className="mr-1" size={14} />
                          {post.author}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline" className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white">
                        Читать далее
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Authors */}
            <Card className="border-medical-blue/20">
              <CardHeader>
                <CardTitle className="text-medical-blue">Наши авторы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {authors.map((author, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <img 
                      src={author.avatar} 
                      alt={author.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-medical-gray-dark">{author.name}</h4>
                      <p className="text-sm text-medical-gray">{author.position}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">{author.articles} статей</Badge>
                        <span className="text-xs text-medical-gray">{author.specialization}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card className="border-medical-blue/20">
              <CardHeader>
                <CardTitle className="text-medical-blue">Популярные теги</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["лазеры", "RF", "безопасность", "обучение", "HIFU", "бизнес", "инновации", "сертификация"].map((tag, index) => (
                    <Badge key={index} variant="outline" className="cursor-pointer hover:bg-medical-blue hover:text-white transition-colors">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="border-medical-blue/20 bg-medical-blue/5">
              <CardHeader>
                <CardTitle className="text-medical-blue">Подписка на блог</CardTitle>
                <CardDescription>
                  Получайте новые статьи на почту
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Ваш email" />
                <Button className="w-full bg-medical-blue hover:bg-medical-blue-dark">
                  <Icon name="Mail" className="mr-2" size={16} />
                  Подписаться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-medical-blue to-medical-blue-light text-white rounded-xl p-8 mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Хотите стать автором?</h2>
          <p className="text-xl mb-6 opacity-90">
            Поделитесь своим опытом с профессиональным сообществом
          </p>
          <Button size="lg" className="bg-white text-medical-blue hover:bg-gray-100">
            <Icon name="PenTool" className="mr-2" size={20} />
            Предложить статью
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Blog