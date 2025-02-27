import { ApiProperty } from '@nestjs/swagger';
import * as Joi from 'joi';

export class BibliografiCreateOrUpdateDTO {
  @ApiProperty({
    default: 'Kajian Fiqih',
    description: 'title of bibliografi',
    type: String,
  })
  title: string;
  @ApiProperty({
    default: 'buku ini berisikan bla bla blaa',
    type: String,
    description: 'description for bibliografi',
  })
  description: string;
  @ApiProperty({
    default: 'MUI',
    type: String,
    description: 'contributor the bibliografi',
  })
  contributor: string;
  @ApiProperty({
    default: 'Ujang suracap',
    type: String,
    description: 'creator of the bibliografi',
  })
  creator: string;
  @ApiProperty({
    default: 'Sinar mas',
    type: String,
    description: 'publisher of the bibliografi',
  })
  publisher: string;
  @ApiProperty({
    default: 'https://google.com',
    type: String,
    description: 'where the bibliografi get from',
  })
  source: string;
  @ApiProperty({
    type: String,
    description: 'image of the bibliografi',
    default:
      'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
  })
  image_url: string;
  @ApiProperty({
    default: 'jqwe21kkiebxn21po',
    type: String,
    description: 'category of the bibliografi',
  })
  category: string;
  @ApiProperty({
    default: 'iasdjadjajxxj',
    type: String,
    description: 'subcategory of the bibliografi',
  })
  subcategory: string;
  @ApiProperty({
    default: 124,
    type: Number,
    description: 'total page of the bibliografi',
  })
  page: string;
}

export class QueryFindBibliografi {
  @ApiProperty({
    default: 'id dari bibliografi',
    type: String,
    required: false,
    description: 'id of the bibliography',
  })
  id: string;
  @ApiProperty({
    default: 'createdAt',
    type: String,
    required: false,
    description: 'field to sort the bibliography',
  })
  sort: string;
  @ApiProperty({
    default: 'Fiqih',
    type: String,
    required: false,
    description: 'category name or category id',
  })
  category: string;
  @ApiProperty({
    default: 'Fiqih Jinayah',
    type: String,
    required: false,
    description: 'sub category id or name',
  })
  sub_category: string;
}
export const validationQueryFindBibliografi: Joi.ObjectSchema<QueryFindBibliografi> =
  Joi.object({
    id: Joi.string(),
    sort: Joi.string().valid('createdAt', 'total'),
    category: Joi.string(),
    sub_category: Joi.string(),
  });

export const validationCreateBibliografi: Joi.ObjectSchema<BibliografiCreateOrUpdateDTO> =
  Joi.object({
    publisher: Joi.string().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    contributor: Joi.string().required(),
    creator: Joi.string().required(),
    source: Joi.string().required(),
    image_url: Joi.string().required().uri(),
    category: Joi.string().required(),
    subcategory: Joi.string().required(),
    page: Joi.number().required(),
  });

export const validationUpdateBibliography: Joi.ObjectSchema<BibliografiCreateOrUpdateDTO> =
  Joi.object({
    publisher: Joi.string(),
    title: Joi.string(),
    description: Joi.string(),
    contributor: Joi.string(),
    creator: Joi.string(),
    source: Joi.string(),
    image_url: Joi.string().uri(),
    category: Joi.string(),
    subcategory: Joi.string(),
    page: Joi.number(),
  });
