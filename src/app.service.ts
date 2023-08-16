import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  /**
   * A description of the entire function.
   *
   * @return {string} description of return value
   */
  getHello(): string {
    return 'Hello World!';
  }
}
