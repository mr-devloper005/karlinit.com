import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Find trusted businesses near you',
      description: 'Explore verified business listings, compare services, and connect with companies that fit your needs.',
      openGraphTitle: 'Find trusted businesses near you',
      openGraphDescription: 'Discover and compare dependable businesses through a clear, useful local directory.',
      keywords: ['business directory', 'local businesses', 'business listings', 'service providers'],
    },
    hero: {
      badge: 'Business discovery made simple',
      title: ['Find the right business', 'with confidence.'],
      description: 'Search trusted listings, compare services, and connect directly with businesses ready to help.',
      primaryCta: { label: 'Read latest stories', href: '/article' },
      secondaryCta: { label: 'Explore visuals', href: '/image' },
      searchPlaceholder: 'Search stories, visuals, listings, and more',
      focusLabel: 'Focus',
      featureCardBadge: 'latest cover rotation',
      featureCardTitle: 'Latest posts shape the visual identity of the homepage.',
      featureCardDescription: 'Recent images and stories stay at the center of the experience without changing any core platform behavior.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for reading, browsing, and connecting different kinds of content.',
      paragraphs: [
        'This site brings together article-style reading, visual browsing, and structured discovery so visitors can move naturally between different content types.',
        'Instead of separating stories, visuals, and supporting resources into disconnected surfaces, the platform keeps them connected in one place with consistent navigation and easier exploration.',
        'Whether someone starts with a story, an image-led post, a listing, or a resource page, they can keep discovering related content without friction.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Reading-first homepage with stronger emphasis on stories and imagery.',
        'Connected sections for articles, visuals, listings, and supporting resources.',
        'Cleaner browsing rhythm designed to make exploration feel easier.',
        'Lightweight interactions that keep the experience fast and readable.',
      ],
      primaryLink: { label: 'Browse articles', href: '/article' },
      secondaryLink: { label: 'See visuals', href: '/image' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Explore articles, visuals, and resources through one connected experience.',
      description: 'Move between articles, image-led posts, listings, and resources through one clearer and more connected visual system.',
      primaryCta: { label: 'Browse Articles', href: '/article' },
      secondaryCta: { label: 'Contact Sales', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Why we exist',
    title: 'A clearer way to find the right business.',
    description: `${slot4BrandConfig.siteName} helps customers discover dependable businesses and gives companies a useful place to explain what they do best.`,
    paragraphs: [
      'Choosing a provider should not require opening dozens of tabs or decoding vague profiles. We organize practical business information so visitors can compare options with less friction.',
      'Every listing is designed to surface the details that matter: services, location, contact options, business story, and related providers worth considering.',
      'For business owners, the directory creates a focused place to build visibility, communicate value, and connect with people already looking for help.',
    ],
    values: [
      {
        title: 'Useful information first',
        description: 'We prioritize clear service details, direct contact paths, and practical comparison cues.',
      },
      {
        title: 'Better local discovery',
        description: 'Categories and related listings make it easier to discover strong alternatives and nearby providers.',
      },
      {
        title: 'Built for confidence',
        description: 'Consistent listing pages help visitors understand a business before making contact.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Let us help you get more from the directory.',
    description: 'Whether you are adding a company, updating a listing, reporting inaccurate information, or exploring a partnership, send the details and our team will route your request.',
    formTitle: 'How can we help?',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search posts, topics, categories, and content across the site.',
    },
    hero: {
      badge: 'Search the archive',
      title: 'Search businesses, services, and categories.',
      description: 'Use a company name, service, category, or location to narrow the directory and find a strong match.',
      placeholder: 'Search business name, service, or location',
    },
    resultsTitle: 'Businesses worth discovering',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit new content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to add your business.',
      description: 'Use your account to open the listing workspace and create or manage a business profile.',
    },
    hero: {
      badge: 'Publishing workspace',
      title: 'Create a listing customers can trust.',
      description: 'Add accurate details, a clear service summary, contact information, and images that help customers choose your business.',
    },
    formTitle: 'Content details',
    submitLabel: 'Submit content',
    successTitle: 'Content submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Business account access',
      title: 'Welcome back. Your listing workspace is ready.',
      description: 'Login to create listings, manage your business information, and keep your directory presence current.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Join the directory',
      title: 'Create an account and put your business on the map.',
      description: 'Set up your account to publish a detailed business listing and make it easier for new customers to find you.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
