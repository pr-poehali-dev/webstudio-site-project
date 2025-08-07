import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const services = [
    {
      icon: "Palette",
      title: "Веб-дизайн",
      description: "Создаем современные и привлекательные интерфейсы"
    },
    {
      icon: "Code",
      title: "Разработка",
      description: "Программируем функциональные веб-приложения"
    },
    {
      icon: "Smartphone",
      title: "Мобильная адаптация",
      description: "Адаптируем под все устройства и экраны"
    },
    {
      icon: "Search",
      title: "SEO оптимизация",
      description: "Поднимаем позиции в поисковых системах"
    }
  ];

  const portfolio = [
    {
      title: "E-commerce Platform",
      category: "Интернет-магазин",
      description: "Современная платформа для онлайн-торговли",
      image: "/img/756c6c4b-ea1b-440e-b9d4-e2e68f14abbf.jpg"
    },
    {
      title: "Corporate Website",
      category: "Корпоративный сайт",
      description: "Презентационный сайт для крупной компании",
      image: "/img/46d59151-53ae-4ddd-ac6f-196c4966a58d.jpg"
    },
    {
      title: "Mobile App Landing",
      category: "Лендинг",
      description: "Посадочная страница для мобильного приложения",
      image: "/img/74a48af3-2ba5-4596-8cd0-62b8d2ceabe9.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={20} className="text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">WebStudio</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-gray-600 hover:text-primary transition-colors">Портфолио</a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О нас</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Консультация
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Создаем 
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"> уникальные</span>
              <br />веб-решения
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Разрабатываем современные сайты и веб-приложения, которые помогают вашему бизнесу расти и привлекать клиентов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 py-4 text-lg">
                <Icon name="Rocket" size={20} className="mr-2" />
                Начать проект
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть работы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Наши услуги</Badge>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Что мы предлагаем</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Полный цикл разработки от идеи до готового продукта
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center text-sm md:text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-gradient-to-r from-slate-50 to-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Портфолио</Badge>
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Наши работы</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Примеры успешно реализованных проектов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <Icon name="ExternalLink" size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">{project.category}</Badge>
                    <Icon name="ArrowUpRight" size={16} className="text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">О нас</Badge>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                Команда профессионалов
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                Мы — креативная команда разработчиков, дизайнеров и маркетологов, которая создает цифровые решения для бизнеса любого масштаба.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-accent" />
                  <span className="text-gray-700">5+ лет опыта в веб-разработке</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-accent" />
                  <span className="text-gray-700">100+ успешных проектов</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-accent" />
                  <span className="text-gray-700">Индивидуальный подход к каждому клиенту</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl shadow-2xl flex items-center justify-center">
                <Icon name="Users" size={120} className="text-white/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center text-white mb-12">
            <h3 className="text-4xl font-bold mb-4">Получить бесплатную консультацию</h3>
            <p className="text-xl opacity-90">
              Обсудим ваш проект и предложим лучшее решение
            </p>
          </div>
          <Card className="max-w-2xl mx-auto shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900">Заявка на консультацию</CardTitle>
              <CardDescription>Заполните форму, и мы свяжемся с вами в течение часа</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>
                </div>
                <Input
                  type="tel"
                  placeholder="Номер телефона"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  className="h-12"
                />
                <Textarea
                  placeholder="Расскажите о вашем проекте"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="resize-none"
                />
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white h-12 text-lg"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={20} className="text-white" />
                </div>
                <h4 className="text-xl font-bold">WebStudio</h4>
              </div>
              <p className="text-gray-400">
                Создаем уникальные веб-решения для вашего бизнеса
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Веб-дизайн</li>
                <li>Разработка</li>
                <li>SEO продвижение</li>
                <li>Поддержка</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  hello@webstudio.ru
                </li>
                <li className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Москва, Россия
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Социальные сети</h5>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <Icon name="Github" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <Icon name="Linkedin" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 WebStudio. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;