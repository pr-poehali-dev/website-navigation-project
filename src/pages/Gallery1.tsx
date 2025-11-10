import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Gallery1 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="md:text-6xl mb-4 text-[#f4b8dd] text-sm font-bold">Привет котенок! ♥</h1>
          <p className="text-lg text-[#e1b894]">я решила как-то тебя удивить, и сделала сайт. он может кривой, но я честно пыталась</p>
        </div>

        <div className="flex justify-center mb-16">
          <div className="w-full max-w-2xl aspect-square bg-secondary rounded-lg overflow-hidden hover-scale group cursor-pointer">
            <img 
              src="https://cdn.poehali.dev/files/60288abd-4779-4a4e-979e-39f9aa7e31d9.jpg" 
              alt="Котята"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <Button
            onClick={() => navigate('/gallery-2')}
            size="lg"
            className="gap-2 hover-scale bg-[#f4b8dd] hover:bg-[#e5a8cd] text-white rounded-full px-8"
          >
            Далее
            <Icon name="ArrowRight" size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gallery1;