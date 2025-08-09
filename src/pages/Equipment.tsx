import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Icon from "@/components/ui/icon"
import { useState } from "react"

const Equipment = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [priceFilter, setPriceFilter] = useState("all")

  const equipment = [
    {
      id: 1,
      title: "Лазерный аппарат DiodeLux Pro",
      category: "laser",
      price: "2500000",
      description: "Профессиональный диодный лазер для эпиляции и омоложения",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      features: ["808nm диод", "Охлаждение сапфиром", "Скорость 10 Гц"],
      certifications: ["CE", "FDA", "ISO 13485"],
      inStock: true
    },
    {
      id: 2,
      title: "RF-лифтинг система ThermaLift",
      category: "rf",
      price: "1800000",
      description: "Радиочастотная система для подтяжки и омоложения кожи",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      features: ["Монополярный RF", "Контроль температуры", "3 насадки"],
      certifications: ["CE", "Medical Device", "ISO 9001"],
      inStock: true
    },
    {
      id: 3,
      title: "Аппарат для мезотерапии MesoJet",
      category: "injection",
      price: "450000",
      description: "Безыгольная мезотерапия с точной дозировкой",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      features: ["Безыгольная технология", "Регулируемое давление", "Стерильные картриджи"],
      certifications: ["CE", "GMP", "Роспотребнадзор"],
      inStock: false
    },
    {
      id: 4,
      title: "IPL система PhotoMax",
      category: "ipl",
      price: "1200000",
      description: "Интенсивный импульсный свет для фотоомоложения",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      features: ["Спектр 420-1200nm", "Сменные фильтры", "Охлаждение"],
      certifications: ["CE", "FDA", "Medical CE"],
      inStock: true
    },
    {
      id: 5,
      title: "Ультразвуковой HIFU аппарат",
      category: "hifu",
      price: "3200000",
      description: "Высокоинтенсивный фокусированный ультразвук",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      features: ["Глубина 1.5-4.5mm", "Визуализация", "Безопасность"],
      certifications: ["CE", "FDA", "KFDA"],
      inStock: true
    },
    {
      id: 6,
      title: "Криолиполиз CoolSculpt Pro",
      category: "cryo",
      price: "2800000",
      description: "Неинвазивное разрушение жировых клеток холодом",
      image: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      features: ["Контролируемое охлаждение", "Различные аппликаторы", "Безопасность"],
      certifications: ["FDA", "CE", "Health Canada"],
      inStock: true
    }
  ]

  const categories = [
    { value: "all", label: "Все категории" },
    { value: "laser", label: "Лазерное оборудование" },
    { value: "rf", label: "RF-аппараты" },
    { value: "injection", label: "Инъекционное оборудование" },
    { value: "ipl", label: "IPL системы" },
    { value: "hifu", label: "HIFU аппараты" },
    { value: "cryo", label: "Криолиполиз" }
  ]

  const filteredEquipment = equipment.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter
    const matchesPrice = priceFilter === "all" || 
                        (priceFilter === "low" && parseInt(item.price) < 1000000) ||
                        (priceFilter === "medium" && parseInt(item.price) >= 1000000 && parseInt(item.price) < 2000000) ||
                        (priceFilter === "high" && parseInt(item.price) >= 2000000)
    
    return matchesSearch && matchesCategory && matchesPrice
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-medical-blue/5 to-white">
      {/* Header */}
      <div className="bg-medical-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Каталог оборудования</h1>
          <p className="text-xl opacity-90">Профессиональные медицинские аппараты с сертификацией</p>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
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
            <div>
              <label className="block text-sm font-medium mb-2">Цена</label>
              <Select value={priceFilter} onValueChange={setPriceFilter}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все цены</SelectItem>
                  <SelectItem value="low">До 1 млн ₽</SelectItem>
                  <SelectItem value="medium">1-2 млн ₽</SelectItem>
                  <SelectItem value="high">От 2 млн ₽</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Equipment Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEquipment.map(item => (
            <Card key={item.id} className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  {!item.inStock && (
                    <Badge className="absolute top-2 right-2 bg-red-500">
                      Под заказ
                    </Badge>
                  )}
                  {item.inStock && (
                    <Badge className="absolute top-2 right-2 bg-green-500">
                      В наличии
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-medical-blue">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
                <div className="text-2xl font-bold text-medical-green">
                  {parseInt(item.price).toLocaleString('ru-RU')} ₽
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Особенности:</h4>
                  <ul className="space-y-1">
                    {item.features.map((feature, index) => (
                      <li key={index} className="text-sm flex items-center">
                        <Icon name="Check" className="mr-2 text-medical-green" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Сертификаты:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.certifications.map((cert, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1 bg-medical-blue hover:bg-medical-blue-dark">
                    Подробнее
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Icon name="Heart" size={16} className="mr-2" />
                    В избранное
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredEquipment.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" className="mx-auto mb-4 text-gray-400" size={48} />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Ничего не найдено</h3>
            <p className="text-gray-500">Попробуйте изменить параметры поиска</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Equipment