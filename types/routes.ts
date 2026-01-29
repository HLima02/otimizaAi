// Hierarquia de dados 
// User
//  └── Routes
//       └── Stops
//            └── Packages

export type user = {
  userId: string
  name: string,
  email: string,
  phone: string,
  photoUrl: string,
  createdAt: any,
  workProfile: {
    platforms: string[],
    routes: route[]
    avgDeliveriesPerDay: 45
  },
  subscription: {
    plan: "free" | "premium",
    status: boolean,
    expiresAt: any
  },

  stats: {
    totalRoutes: number,
    totalPackages: number
  }
}


export type route = {
  routeId: string,
  date: any,
  status: "planned" | "in_progress" | "completed"
  origin: {
    label: string,
    lat: number,
    lng: number
  },
  summary: {
    totalStops: number,
    totalPackages: number,
    totalDistanceKm: number,
    estimatedTimeMin: number
  },

  optimization: {
    method: any,
    optimized: boolean
  },

  createdAt: any
}

export type stops = {
  stopId: string,
  order: number, 
  address: {
    formatted: string,
    lat: number,
    lng: number,
    placeId: string
  },
  status: "pending" | "delivered" | "failed"
  estimatedArrival: any,
  //deliveredAt: null,
}
