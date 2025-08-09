import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Icon from "@/components/ui/icon"
import { useState } from "react"

const Certificates = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const certificates = [
    {
      id: 1,
      title: "ISO 13485:2016",
      category: "quality",
      description: "Система менеджмента качества для медицинских изделий",
      issuer: "TÜV SÜD",
      validUntil: "2025-12-31",
      image: "/img/0271c0f2-23f0-4e82-9e0b-cda1229a010c.jpg",
      scope: "Проектирование, разработка, производство и обслуживание медицинских изделий"
    },
    {
      id: 2,
      title: "CE Marking",
      category: "compliance",
      description: "Соответствие европейским стандартам безопасности",
      issuer: "Notified Body 0123",
      validUntil: "2026-06-30",
      image: "/img/0271c0f2-23f0-4e82-9e0b-cda1229a010c.jpg",
      scope: "Медицинские изделия класса IIa и IIb"
    },
    {
      id: 3,
      title: "FDA 510(k) Clearance",
      category: "regulatory",
      description: "Разрешение FDA на медицинские изделия",
      issuer: "U.S. Food and Drug Administration",
      validUntil: "2027-03-15",
      image: "/img/0271c0f2-23f0-4e82-9e0b-cda1229a010c.jpg",
      scope: "Лазерные системы для косметологии"
    },
    {
      id: 4,
      title: "Регистрационное удостоверение РЗН",
      category: "regulatory",
      description: "Разрешение Росздравнадзора на медицинские изделия",
      issuer: "Росздравнадзор",
      validUntil: "2025-09-20",
      image: "/img/0271c0f2-23f0-4e82-9e0b-cda1229a010c.jpg",
      scope: "Аппараты для физиотерапии и косметологии"
    },
    {
      id: 5,
      title: "ISO 9001:2015",
      category: "quality",
      description: "Система менеджмента качества",
      issuer: "Bureau Veritas",
      validUntil: "2026-01-10",
      image: "/img/0271c0f2-23f0-4e82-9e0b-cda1229a010c.jpg",
      scope: "Поставка и обслуживание медицинского оборудования"
    },
    {
      id: 6,
      title: "IEC 60601-1",
      category: "safety",
      description: "Безопасность медицинских электрических приборов",
      issuer: "Intertek",
      validUntil: "2025-11-30",
      image: "/img/0271c0f2-23f0-4e82-9e0b-cda1229a010c.jpg",
      scope: "Электробезопасность медицинского оборудования"
    },
    {
      id: 7,
      title: "Health Canada License",
      category: "regulatory",
      description: "Лицензия Health Canada",
      issuer: "Health Canada",
      validUntil: "2026-08-15",
      image: "/img/0271c0f2-23f0-4e82-9e0b-cda1229a010c.jpg",
      scope: "Медицинские изделия класса II"
    },
    {
      id: 8,
      title: "KFDA Approval",
      category: "regulatory",
      description: "Одобрение корейского агентства по лекарствам",
      issuer: "Korea Food and Drug Administration",
      validUntil: "2025-12-01",
      image: "/img/0271c0f2-23f0-4e82-9e0b-cda1229a010c.jpg",
      scope: "Косметологическое оборудование"
    }
  ]

  const categories = [
    { value: "all", label: "Все категории" },
    { value: "quality", label: "Качество" },
    { value: "compliance", label: "Соответствие" },
    { value: "regulatory", label: "Регулирование" },
    { value: "safety", label: "Безопасность" }
  ]

  const certificationBodies = [
    {
      name: "TÜV SÜD",
      description: "Международная организация по сертификации",
      logo: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      website: "tuvsud.com"
    },
    {
      name: "Bureau Veritas",
      description: "Глобальный лидер в области тестирования и сертификации",
      logo: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      website: "bureauveritas.com"
    },
    {
      name: "Intertek",
      description: "Ведущая компания по обеспечению качества",
      logo: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      website: "intertek.com"
    },
    {
      name: "Росздравнадзор",
      description: "Федеральная служба по надзору в сфере здравоохранения",
      logo: "/img/6fc4857f-5b1e-4d9e-8bc9-1a81bbb3415f.jpg",
      website: "roszdravnadzor.gov.ru"
    }
  ]

  const filteredCertificates = certificates.filter(cert => {
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || cert.category === categoryFilter
    
    return matchesSearch && matchesCategory
  })

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "quality": return "bg-blue-100 text-blue-800"
      case "compliance": return "bg-green-100 text-green-800"
      case "regulatory": return "bg-purple-100 text-purple-800"
      case "safety": return "bg-red-100 text-red-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  const getCategoryLabel = (category: string) => {
    const cat = categories.find(c => c.value === category)
    return cat ? cat.label : category
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-medical-blue/5 to-white">
      {/* Header */}
      <div className="bg-medical-blue text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Сертификаты и лицензии</h1>
          <p className="text-xl opacity-90">Полная документация для безопасной работы оборудования</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Поиск сертификатов</label>
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

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredCertificates.map(cert => (
            <Card key={cert.id} className="group hover:shadow-xl transition-all duration-300 border-medical-blue/20">
              <CardHeader>
                <div className="relative">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <Badge className={`absolute top-2 right-2 ${getCategoryColor(cert.category)}`}>
                    {getCategoryLabel(cert.category)}
                  </Badge>
                </div>
                <CardTitle className="text-medical-blue">{cert.title}</CardTitle>
                <CardDescription>{cert.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <Icon name="Building" className="mr-2 text-medical-gray" size={16} />
                    <span className="text-medical-gray">Выдан: {cert.issuer}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon name="Calendar" className="mr-2 text-medical-gray" size={16} />
                    <span className="text-medical-gray">Действует до: {cert.validUntil}</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <Icon name="FileText" className="mr-2 mt-1 text-medical-gray" size={16} />
                    <span className="text-medical-gray">{cert.scope}</span>
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

        {/* Certification Bodies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-12">
            Сертифицирующие организации
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificationBodies.map((body, index) => (
              <Card key={index} className="text-center p-6 border-medical-blue/20 hover:shadow-lg transition-shadow">
                <img 
                  src={body.logo} 
                  alt={body.name}
                  className="w-16 h-16 mx-auto mb-4 rounded-lg object-cover"
                />
                <h3 className="font-bold text-lg text-medical-gray-dark mb-2">{body.name}</h3>
                <p className="text-sm text-medical-gray mb-4">{body.description}</p>
                <Button variant="outline" size="sm" className="text-medical-blue border-medical-blue">
                  <Icon name="ExternalLink" className="mr-2" size={14} />
                  {body.website}
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Compliance Info */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-center text-medical-gray-dark mb-8">
            Соответствие стандартам
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-medical-blue/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="text-medical-blue" size={32} />
              </div>
              <h3 className="font-bold text-lg text-medical-gray-dark mb-2">Безопасность</h3>
              <p className="text-medical-gray">
                Все оборудование соответствует международным стандартам безопасности
              </p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-medical-green/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" className="text-medical-green" size={32} />
              </div>
              <h3 className="font-bold text-lg text-medical-gray-dark mb-2">Качество</h3>
              <p className="text-medical-gray">
                Система менеджмента качества сертифицирована по ISO 13485
              </p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-medical-blue/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Globe" className="text-medical-blue" size={32} />
              </div>
              <h3 className="font-bold text-lg text-medical-gray-dark mb-2">Международное признание</h3>
              <p className="text-medical-gray">
                Сертификаты признаются в более чем 50 странах мира
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-medical-blue to-medical-blue-light text-white rounded-xl p-8 mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна помощь с документацией?</h2>
          <p className="text-xl mb-6 opacity-90">
            Наши специалисты помогут с оформлением всех необходимых документов
          </p>
          <Button size="lg" className="bg-white text-medical-blue hover:bg-gray-100">
            <Icon name="FileText" className="mr-2" size={20} />
            Получить консультацию
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Certificates