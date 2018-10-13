import { Injectable } from '@angular/core';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { Feedback } from '../shared/feedback';
import { Observable} from 'rxjs/Rx';

@Injectable()
export class FeedbackService {


  constructor(private restangular: Restangular) { }

  submitFeedback(feedback: Feedback): Observable<Feedback>{

    return this.restangular.all('feedback').post(feedback);
  }
}
