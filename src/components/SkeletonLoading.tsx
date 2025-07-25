import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';

export const EventCardSkeleton = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="bg-card/80 backdrop-blur-sm border border-time-portal/20 rounded-lg p-6 space-y-4"
  >
    <div className="flex items-center justify-between">
      <Skeleton className="h-8 w-8 rounded-full" />
      <Skeleton className="h-6 w-20 rounded-full" />
    </div>
    <Skeleton className="h-8 w-3/4" />
    <Skeleton className="h-20 w-full" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
    <Skeleton className="h-10 w-full" />
  </motion.div>
);

export const HeroSkeleton = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center space-y-8">
      <Skeleton className="h-16 w-16 rounded-full mx-auto" />
      <Skeleton className="h-20 w-96 mx-auto" />
      <Skeleton className="h-8 w-32 mx-auto" />
      <Skeleton className="h-6 w-80 mx-auto" />
      <div className="grid grid-cols-4 gap-4 mt-12">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-32 w-32" />
        ))}
      </div>
    </div>
  </div>
);

export const GallerySkeleton = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {Array.from({ length: 12 }).map((_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.1 }}
      >
        <Skeleton className="aspect-square rounded-lg" />
      </motion.div>
    ))}
  </div>
);

export const TeamSkeleton = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    {Array.from({ length: 6 }).map((_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        className="text-center space-y-4"
      >
        <Skeleton className="w-32 h-32 rounded-full mx-auto" />
        <Skeleton className="h-6 w-32 mx-auto" />
        <Skeleton className="h-4 w-24 mx-auto" />
        <Skeleton className="h-4 w-36 mx-auto" />
      </motion.div>
    ))}
  </div>
);

const SkeletonLoading = {
  EventCard: EventCardSkeleton,
  Hero: HeroSkeleton,
  Gallery: GallerySkeleton,
  Team: TeamSkeleton,
};

export default SkeletonLoading;