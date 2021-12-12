import { Controller, Get } from '@nestjs/common';

@Controller('tanks')
export class TanksController {
  @Get()
  getUserTanks() {
    return '<h1>no witam graczy</h1>';
  }
}
