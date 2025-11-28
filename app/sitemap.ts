import { MetadataRoute } from 'next';
import { getAllVehicles, getAllVehicleModels } from '@/lib/data';
import { getAllGuides } from '@/lib/guides';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ev.makr.io';
  const currentDate = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/vehicles`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // Vehicle model pages
  const vehicleModels = getAllVehicleModels();
  const vehicleModelPages: MetadataRoute.Sitemap = vehicleModels.map((model) => ({
    url: `${baseUrl}${model.urlPath}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Individual vehicle detail pages
  const vehicles = getAllVehicles();
  const vehicleDetailPages: MetadataRoute.Sitemap = vehicles.map((vehicle) => ({
    url: `${baseUrl}/vehicles/details/${vehicle.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Guide pages
  const guides = getAllGuides();
  const guidePages: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: new Date(guide.updatedDate),
    changeFrequency: 'monthly' as const,
    priority: guide.featured ? 0.8 : 0.6,
  }));

  return [
    ...staticPages,
    ...vehicleModelPages,
    ...vehicleDetailPages,
    ...guidePages,
  ];
}
