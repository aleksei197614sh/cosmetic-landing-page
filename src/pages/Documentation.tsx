import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Icon from "@/components/ui/icon"
import { useState } from "react"

const Documentation = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")

  const documents = [
    {
      id: 1,
      title: "Руководство пользователя DiodeLux Pro",
      category: "manuals",
      type: "pdf",
      equipment: "DiodeLux Pro",
      language: "ru",
      version: "v2.1",
      size: "15.2 MB",
      pages: 120,
      lastUpdated: "2024-01-15",
      description: "Полное руководство по эксплуатации лазерного аппарата",
      downloads: 1250
    },
    {
      id: 2,
      title: "Техническая спецификация ThermaLift RF",
      category: "specifications",
      type: "pdf",
      equipment: "ThermaLift RF",
      language: "ru",
      version: "v1.5",
      size: "8.7 MB",
      pages: 45,
      lastUpdated: "2024-01-12",
      description: "Детальные технические характеристики RF-системы",
      downloads: 890
    },
    {
      id: 3,
      title: "Протоколы процедур IPL фотоомоложения",
      category: "protocols",
      type: "pdf",
      equipment: "PhotoMax IPL",
      language: "ru",
      version: "v3.0",
      size: "12.4 MB",
      pages: 80,
      lastUpdated: "2024-01-10",
      description: "Стандартные протоколы проведения IPL процедур",
      downloads: 2100
    },
    {
      id: 4,
      title: "Инструкция по технике безопасности",
      category: "safety",
      type: "pdf",
      equipment: "Все оборудование",
      language: "ru",
      version: "v4.2",
      size: "6.1 MB",
      pages: 35,
      lastUpdated: "2024-01-08",
      description: "Общие требования безопасности при работе с медицинским оборудованием",
      downloads: 3200
    },
    {
      id: 5,
      title: "Видеоинструкция: Настройка HIFU аппарата",
      category: "videos",
      type: "video",
      equipment: "HIFU UltraLift",
      language: "ru",
      version: "HD",
      size: "250 MB",
      pages: 0,
      lastUpdated: "2024-01-05",
      description: "Пошаговая видеоинструкция по настройке HIFU системы",
      downloads: 750
    },
    {
      id: 6,
      title: "Сертификат соответствия CE",
      category: "certificates",
      type: "pdf",
      equipment: "DiodeLux Pro",
      language: "en",
      version: "Original",
      size: "2.3 MB",
      pages: 8,
      lastUpdated: "2023-12-20",
      description: "Официальный сертификат соответствия европейским стандартам",
      downloads: 450
    },
    {
      id: 7,
      title: "Программное обеспечение MesoControl",
      category: "software",
      type: "exe",
      equipment: "MesoJet Pro",
      language: "ru",
      version: "v2.5.1",
      size: "45.8 MB",
      pages: 0,
      lastUpdated: "2024-01-03",
      description: "Программа управления аппаратом для мезотерапии",
      downloads: 320
    },
    {
      id: 8,
      title: "Схема подключения CoolSculpt Pro",
      category: "schemes",
      type: "pdf",
      equipment: "CoolSculpt Pro",
      language: "ru",
      version: "v1.2",
      size: "4.5 MB",
      pages: 12,
      lastUpdated: "2023-12-15",
      description: "Электрическая схема подключения аппарата криолиполиза",
      downloads: 180
    },
    {
      id: 9,
      title: "Регламент технического обслуживания",
      category: "maintenance",
      type: "pdf",
      equipment: "Все оборудование",
      language: "ru",
      version: "v2.0",
      size: "9.8 MB",
      pages: 65,
      lastUpdated: "2023-12-10",
      description: "Подробный регламент проведения планового ТО",
      downloads: 1100
    },
    {
      id: 10,
      title: "Каталог запасных частей",
      category: "parts",
      type: "pdf",
      equipment: "Все оборудование",
      language: "ru",
      version: "2024",
      size: "25.6 MB",
      pages: 200,
      lastUpdated: "2024-01-01",
      description: "Полный каталог запасных частей с артикулами и ценами",
      downloads: 680
    }
  ]

  const categories = [
    { value: "all", label: "Все категории" },
    { value: "manuals", label: "Руководства пользователя" },
    { value: "specifications", label: "Технические спецификации" },
    { value: "protocols", label: "Протоколы процедур" },
    { value: "safety", label: "Техника безопасности" },
    { value: "videos", label: "Видеоинструкции" },
    { value: "certificates", label: "Сертификаты" },
    { value: "software", label: "Программное обеспечение" },
    { value: "schemes", label: "Схемы подключения" },
    { value: "maintenance", label: "Техническое обслуживание" },
    { value: "parts", label: "Запасные части" }
  ]

  const documentTypes = [
    { value: "all", label: "Все типы" },
    { value: "pdf", label: "PDF документы" },
    { value: "video", label: "Видео" },
    { value: "exe", label: "Программы" },
    { value: "archive", label: "Архивы" }
  ]

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.equipment.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || doc.category === categoryFilter
    const matchesType = typeFilter === "all" || doc.type === typeFilter
    
    return matchesSearch && matchesCategory && matchesType
  })

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "manuals": return "bg-blue-100 text-blue-800"
      case "specifications": return "bg-green-100 text-green-800"
      case "protocols": return "bg-purple-100 text-purple-800"
      case "safety": return "bg-red-100 text-red-800"
      case "videos": return "bg-orange-100 text-orange-800"
      case "certificates": return "bg-yellow-100 text-yellow-800"
      case "software": return "bg-indigo-100 text-indigo-800"
      case "schemes": return "bg-pink-100 text-pink-800"
      case "maintenance": return "bg-teal-100 text-teal-800"
      case "parts": return "bg-gray-100 text-gray-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getCategoryLabel = (category: string) => {
    const cat = categories.find(c => c.value === category)
    return cat ? cat.label : category
  }

  const getFileIcon = (type: string) => {
    switch (type) {
      case "pdf": return "FileText"
      case "video": return "Play"
      case "exe": return "Download"
      case "archive": return "Archive"
      default: return "File"
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

  const formatFileSize = (size: string) => {
    return size
  }

  const popularDocuments = documents
    .sort((a, b) => b.downloads - a.downloads)
    .slice(0, 6)

  const recentDocuments = documents
    .sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())
    .slice(0, 6)

  return (
    <div className="min-h-screen bg-gradient-to-b from-medical-blue/5 to-white">
      {/* Header */}
      <div className="bg-medical-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Документация</h1>
          <p className="text-xl opacity-90">Техническая документация и материалы для оборудования</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center p-6 border-medical-blue/20">
            <Icon name="FileText" className="mx-auto mb-4 text-medical-blue" size={40} />
            <div className="text-3xl font-bold text-medical-blue mb-2">150+</div>
            <div className="text-medical-gray">Документов</div>
          </Card>
          <Card className="text-center p-6 border-medical-blue/20">
            <Icon name="Play" className="mx-auto mb-4 text-medical-blue" size={40} />
            <div className="text-3xl font-bold text-medical-blue mb-2">25+</div>
            <div className="text-medical-gray">Видеоинструкций</div>
          </Card>
          <Card className="text-center p-6 border-medical-blue/20">
            <Icon name="Download" className="mx-auto mb-4 text-medical-blue" size={40} />
            <div className="text-3xl font-bold text-medical-blue mb-2">10K+</div>
            <div className="text-medical-gray">Скачиваний</div>
          </Card>
          <Card className="text-center p-6 border-medical-blue/20">
            <Icon name="RefreshCw" className="mx-auto mb-4 text-medical-blue" size={40} />
            <div className="text-3xl font-bold text-medical-blue mb-2">24/7</div>
            <div className="text-medical-gray">Обновления</div>
          </Card>
        </div>

        {/* Document Tabs */}
        <Tabs defaultValue="all" className="mb-16">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">Все документы</TabsTrigger>
            <TabsTrigger value="popular">Популярные</TabsTrigger>
            <TabsTrigger value="recent">Недавние</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            {/* Filters */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Поиск документов</label>
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
                <div>
                  <label className="block text-sm font-medium mb-2">Тип файла</label>
                  <Select value={typeFilter} onValueChange={setTypeFilter}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {documentTypes.map(type => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Documents Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDocuments.map(doc => (
                <Card key={doc.id} className="border-medical-blue/20 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-medical-blue/10 rounded-lg">
                        <Icon name={getFileIcon(doc.type)} className="text-medical-blue" size={24} />
                      </div>
                      <div className="flex gap-2">
                        <Badge className={getCategoryColor(doc.category)}>
                          {getCategoryLabel(doc.category)}
                        </Badge>
                        <Badge variant="outline">{doc.type.toUpperCase()}</Badge>
                      </div>
                    </div>
                    <CardTitle className="text-medical-blue text-lg leading-tight">
                      {doc.title}
                    </CardTitle>
                    <CardDescription>{doc.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-medical-gray">Оборудование:</span>
                        <span className="font-semibold">{doc.equipment}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-medical-gray">Версия:</span>
                        <span className="font-semibold">{doc.version}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-medical-gray">Размер:</span>
                        <span className="font-semibold">{formatFileSize(doc.size)}</span>
                      </div>
                      {doc.pages > 0 && (
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-medical-gray">Страниц:</span>
                          <span className="font-semibold">{doc.pages}</span>
                        </div>
                      )}
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-medical-gray">Обновлено:</span>
                        <span className="font-semibold">{formatDate(doc.lastUpdated)}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-medical-gray">Скачиваний:</span>
                        <span className="font-semibold">{doc.downloads}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-medical-blue hover:bg-medical-blue-dark">
                        <Icon name="Download" className="mr-2" size={16} />
                        Скачать
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Icon name="Eye" className="mr-2" size={16} />
                        Просмотр
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="popular" className="space-y-6">
            <h3 className="text-2xl font-bold text-medical-gray-dark">Популярные документы</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularDocuments.map(doc => (
                <Card key={doc.id} className="border-medical-blue/20 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Icon name={getFileIcon(doc.type)} className="text-medical-blue" size={32} />
                      <Badge className="bg-red-100 text-red-800">
                        {doc.downloads} скачиваний
                      </Badge>
                    </div>
                    <CardTitle className="text-medical-blue">{doc.title}</CardTitle>
                    <CardDescription>{doc.equipment}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-medical-blue hover:bg-medical-blue-dark">
                      <Icon name="Download" className="mr-2" size={16} />
                      Скачать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recent" className="space-y-6">
            <h3 className="text-2xl font-bold text-medical-gray-dark">Недавно обновленные</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentDocuments.map(doc => (
                <Card key={doc.id} className="border-medical-blue/20 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Icon name={getFileIcon(doc.type)} className="text-medical-blue" size={32} />
                      <Badge className="bg-green-100 text-green-800">
                        {formatDate(doc.lastUpdated)}
                      </Badge>
                    </div>
                    <CardTitle className="text-medical-blue">{doc.title}</CardTitle>
                    <CardDescription>{doc.equipment}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-medical-blue hover:bg-medical-blue-dark">
                      <Icon name="Download" className="mr-2" size={16} />
                      Скачать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Document Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
            Категории документов
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {categories.slice(1).map((category, index) => {
              const docCount = documents.filter(doc => doc.category === category.value).length
              return (
                <Card key={index} className="text-center p-6 border-medical-blue/20 hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() => setCategoryFilter(category.value)}>
                  <div className={`p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 ${getCategoryColor(category.value)}`}>
                    <Icon name="Folder" size={24} />
                  </div>
                  <h3 className="font-bold text-medical-gray-dark mb-2">{category.label}</h3>
                  <p className="text-medical-gray">{docCount} документов</p>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-16">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
            Нужна помощь с документацией?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-medical-blue/20">
              <Icon name="Phone" className="mx-auto mb-4 text-medical-blue" size={40} />
              <h3 className="font-bold text-lg text-medical-gray-dark mb-2">Техническая поддержка</h3>
              <p className="text-medical-gray mb-4">Консультации по работе с документацией</p>
              <Button className="bg-medical-blue hover:bg-medical-blue-dark">
                +7 (495) 123-45-67
              </Button>
            </Card>

            <Card className="text-center p-6 border-medical-blue/20">
              <Icon name="MessageCircle" className="mx-auto mb-4 text-medical-blue" size={40} />
              <h3 className="font-bold text-lg text-medical-gray-dark mb-2">Онлайн чат</h3>
              <p className="text-medical-gray mb-4">Быстрые ответы на вопросы</p>
              <Button className="bg-medical-blue hover:bg-medical-blue-dark">
                Открыть чат
              </Button>
            </Card>

            <Card className="text-center p-6 border-medical-blue/20">
              <Icon name="Mail" className="mx-auto mb-4 text-medical-blue" size={40} />
              <h3 className="font-bold text-lg text-medical-gray-dark mb-2">Email поддержка</h3>
              <p className="text-medical-gray mb-4">Подробные консультации по почте</p>
              <Button className="bg-medical-blue hover:bg-medical-blue-dark">
                docs@medkosmet.ru
              </Button>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-medical-blue to-medical-blue-light text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Не нашли нужный документ?</h2>
          <p className="text-xl mb-6 opacity-90">
            Свяжитесь с нами, и мы предоставим необходимую документацию
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-medical-blue hover:bg-gray-100">
              <Icon name="Search" className="mr-2" size={20} />
              Запросить документ
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-medical-blue">
              <Icon name="Bell" className="mr-2" size={20} />
              Подписаться на обновления
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Documentation