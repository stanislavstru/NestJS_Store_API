import { ApiProperty } from '@nestjs/swagger';

class CustomerContactDto {
  @ApiProperty({ type: 'string', required: true })
  country: string;

  @ApiProperty({ type: 'string', required: true })
  firstName: string;

  @ApiProperty({ type: 'string', nullable: true })
  lastName: string | null;

  @ApiProperty({ type: 'string' })
  address: string;

  @ApiProperty({ type: 'string', nullable: true })
  address2: string | null;

  @ApiProperty({ type: 'string' })
  city: string;

  @ApiProperty({ type: 'string' })
  state: string;

  @ApiProperty({ type: 'string' })
  zip: string;

  @ApiProperty({ type: 'string', nullable: true })
  phone: string | null;

  @ApiProperty({ type: 'string', required: true })
  email: string;
}

class PaymentIntentProductDataDto {
  @ApiProperty({ type: 'string' })
  name: string;
}

class PaymentIntentPriceDataDto {
  @ApiProperty({ type: PaymentIntentProductDataDto })
  product_data: PaymentIntentProductDataDto;

  @ApiProperty({ type: 'number' })
  unit_amount: number;
}

export class PaymentIntentLineItemDto {
  @ApiProperty({
    type: PaymentIntentPriceDataDto,
    description: 'Price data',
  })
  price_data: PaymentIntentPriceDataDto;

  @ApiProperty({ type: 'number' })
  quantity: number;

  @ApiProperty({ type: 'string' })
  product_id: string;
}

class PaymentIntentFixedAmountDto {
  @ApiProperty({ type: 'number' })
  amount: number;
}

class PaymentIntentDeliverEstimateItemDto {
  @ApiProperty({ type: 'string' })
  unit: 'business_day' | 'day' | 'hour' | 'month' | 'week';

  @ApiProperty({ type: 'number' })
  value: number;
}

class PaymentIntentDeliveryEstimateDto {
  minimum: PaymentIntentDeliverEstimateItemDto;
  maximum: PaymentIntentDeliverEstimateItemDto;
}

class PaymentIntentShippingDetailsPriceDto {
  @ApiProperty({ type: 'string' })
  amount: string;

  @ApiProperty({ type: 'string' })
  currency: string;
}

class PaymentIntentShippingDetailDeliveryDto {
  @ApiProperty({ type: 'string' })
  id: string;

  @ApiProperty({ type: 'number', nullable: true })
  estimatedDays: number;

  @ApiProperty({ type: 'string' })
  durationTerms: string;
}

class PaymentIntentShippingDetailserviceDto {
  @ApiProperty({ type: 'string' })
  id: string;

  @ApiProperty({ type: 'string' })
  provider: string;

  @ApiProperty({ type: 'string', nullable: true })
  name: string;

  @ApiProperty({ type: 'string', nullable: true })
  imagesSmall: string;

  @ApiProperty({ type: 'string', nullable: true })
  imagesLarge: string;
}

class PaymentIntentShippingDetailsDto {
  @ApiProperty({ type: PaymentIntentShippingDetailsPriceDto })
  price: PaymentIntentShippingDetailsPriceDto;

  @ApiProperty({ type: PaymentIntentShippingDetailDeliveryDto })
  delivery: PaymentIntentShippingDetailDeliveryDto;

  @ApiProperty({ type: PaymentIntentShippingDetailserviceDto })
  service: PaymentIntentShippingDetailserviceDto;
}

class PaymentIntentShippingOptionsDto {
  @ApiProperty({ type: PaymentIntentFixedAmountDto })
  fixed_amount: PaymentIntentFixedAmountDto;

  @ApiProperty({ type: 'string' })
  display_name: string;

  @ApiProperty({ type: PaymentIntentDeliveryEstimateDto })
  delivery_estimate: PaymentIntentDeliveryEstimateDto;
}

export class PaymentIntentRequestDto {
  @ApiProperty({
    type: CustomerContactDto,
    description: 'Customer contact',
  })
  customerContact: CustomerContactDto;

  @ApiProperty({
    isArray: true,
    type: PaymentIntentLineItemDto,
    description: 'Line item array',
  })
  lineItems: PaymentIntentLineItemDto[];

  @ApiProperty({
    type: PaymentIntentShippingDetailsDto,
    description: 'Shipping details',
  })
  shippingDetails: PaymentIntentShippingDetailsDto;

  @ApiProperty({
    isArray: true,
    type: PaymentIntentShippingOptionsDto,
    description: 'Shipping options array',
  })
  shippingOptions: PaymentIntentShippingOptionsDto[];
}

export class PaymentIntentResponseDto {
  @ApiProperty({ type: 'string' })
  payment_link: string;
}
