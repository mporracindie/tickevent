import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const mockEvents = [
  {
    id: "1",
    name: "Electronic Dreams Festival",
    description: "The biggest electronic music festival in the city",
    date: new Date("2026-03-15T20:00:00"),
    venue: "Estadio Único, Buenos Aires",
    imageUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    price: 15000,
  },
  {
    id: "2",
    name: "Tech Conference 2026",
    description: "Innovación y tecnología del futuro",
    date: new Date("2026-04-10T09:00:00"),
    venue: "Centro de Convenciones, Palermo",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    price: 25000,
  },
  {
    id: "3",
    name: "Jazz Night Live",
    description: "Una noche de jazz con artistas internacionales",
    date: new Date("2026-03-28T21:00:00"),
    venue: "Teatro Colón, Buenos Aires",
    imageUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80",
    price: 8000,
  },
  {
    id: "4",
    name: "Startup Pitch Night",
    description: "Las mejores startups presentando ante inversores",
    date: new Date("2026-04-05T18:30:00"),
    venue: "WeWork, Microcentro",
    imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
    price: 0,
  },
];

function formatDate(date: Date) {
  return date.toLocaleDateString("es-AR", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatPrice(price: number) {
  if (price === 0) return "Gratis";
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight">Tickevent</h1>
          <div className="flex gap-4">
            <Button variant="ghost">Iniciar sesión</Button>
            <Button>Crear evento</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Descubrí eventos únicos
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Encontrá los mejores eventos de la ciudad. Comprá tus entradas de forma segura y简单.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-8">Próximos eventos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img
                    src={event.imageUrl}
                    alt={event.name}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-1">{event.name}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="line-clamp-1">{event.venue}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-lg font-semibold">
                    {formatPrice(event.price)}
                  </span>
                  <Button size="sm" className="gap-2">
                    Comprar <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}