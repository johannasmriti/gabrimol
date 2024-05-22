import { Injectable } from '@angular/core';
import { google, sheets_v4 } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable({
  providedIn: 'root',
})
export class GoogleSheetsService {
  private sheets!: sheets_v4.Sheets;

  constructor() {
    this.initializeSheetsAPI();
  }

  private async initializeSheetsAPI() {
    const keyFilePath = path.join(
      __dirname,
      '/src/config/service-account-file.json'
    );

    const auth = new GoogleAuth({
      keyFile: keyFilePath,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    this.sheets = google.sheets({ version: 'v4', auth });
  }

  async getData(spreadsheetId: string, range: string): Promise<any> {
    const res = await this.sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });
    return res.data.values;
  }

  async updateData(
    spreadsheetId: string,
    range: string,
    values: any[]
  ): Promise<any> {
    const request = {
      spreadsheetId,
      range,
      valueInputOption: 'RAW' as const,
      requestBody: {
        values,
      },
    };

    const res = await this.sheets.spreadsheets.values.update(request);
    return res.data;
  }
}
