export type SpaceItemType = {
  id: string;
  name: string;
  address: string; //full address
  latitude: number;
  longitude: number;
  google_maps_url: string; // "https://www.google.com/maps/place/BHIVE+Workspace+Platinum+Indiranagar/@12.9732196,77.6406548,15z/data=!4m2!3m1!1s0x0:0x310e3359eaf1ee4f?sa=X&ved=2ahUKEwjO3L_JgJ6BAxWzZWwGHSwRDXAQ_BJ6BAg9EAA&hl=en-US&ved=2ahUKEwjO3L_JgJ6BAxWzZWwGHSwRDXAQ_BJ6BAhNEAgm/maps/place/BHIVE+Workspace+Indiranagar/@12.9789187,77.6404881,17z/data=!4m6!3m5!1s0x3bae141e007a849d:0xbff26c814318fc77!8m2!3d12.9789187!4d77.643063!16s%2Fg%2F11bxf3zpnf?entry=ttu";
  city: string;
  state: string;
  country: string;
  postal_code: string;
  description: null;
  rules: null;
  amenities: string[];
  images: string[];
  working_hours_start: string; // "00:00";
  working_hours_end: string; // "23:59";
  contact_person_name: string; // "Lavena";
  facilities: null;
  is_active: boolean; // true;
  is_day_pass_enabled: boolean; // true;
  day_pass_price: number; // 499;
  day_pass_discounts_percentage: Record<string, SpaceDiscountType>;
  manager_id: null;
};

export type SpaceDiscountType = {
  value: number;
  message: string;
};
