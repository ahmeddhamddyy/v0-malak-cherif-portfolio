import { type Destination, type Photo } from './destinations-en'
import { destinations as enDestinations } from './destinations-en'
import { destinations as arDestinations } from './destinations-ar'

export type { Destination, Photo }

export function getDestinations(locale: string): Destination[] {
  return locale === 'ar' ? arDestinations : enDestinations
}

export function getDestination(slug: string, locale: string): Destination | undefined {
  const list = getDestinations(locale)
  return list.find((d) => d.slug === slug)
}

export function getNextDestination(slug: string, locale: string): Destination {
  const list = getDestinations(locale)
  const index = list.findIndex((d) => d.slug === slug)
  return list[(index + 1) % list.length]
}

// Export default list for generating static params
export const destinations = enDestinations
