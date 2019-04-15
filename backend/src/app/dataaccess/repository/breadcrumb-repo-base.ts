import * as mongoose from 'mongoose';
import BaseRepositoryInterface from './base-repo-interface';
import { Typegoose } from 'typegoose';
import { BaseRepository } from './base-repository';
import { Breadcrumb } from '../../../models/breadcrumb-model';

export default abstract class BreadcrumbRepositoryBase extends BaseRepository<Breadcrumb>{
}
