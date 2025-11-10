import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Gallery2 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="mb-12 text-center animate-fade-in">
          <p className="text-muted-foreground text-lg">
            Добавьте свои фотографии и описание
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="aspect-square bg-secondary rounded-lg overflow-hidden hover-scale group cursor-pointer"
            >
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
                <span className="text-6xl opacity-20 group-hover:opacity-30 transition-opacity">
                  📷
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <Button
            onClick={() => navigate('/gallery-1')}
            size="lg"
            variant="outline"
            className="gap-2 hover-scale"
          >
            <Icon name="ArrowLeft" size={20} />
            Предыдущая
          </Button>
          <Button
            onClick={() => navigate('/gallery-3')}
            size="lg"
            className="gap-2 hover-scale"
          >
            Следующая страница
            <Icon name="ArrowRight" size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gallery2;