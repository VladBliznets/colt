import { CreateProjectDto } from './../models/CreateProjectDto';
import { Injectable } from '@angular/core';
import { HttpInternalService } from './http-internal.service';

@Injectable({
  providedIn: 'root'
})
export class CreateProjectService {

  constructor(private httpService: HttpInternalService) { }

  public create(project: CreateProjectDto) {
      return this.httpService.postFullRequest<any>('/project/create', project);
  }
}
