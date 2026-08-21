import { describe, it, expect } from 'vitest';
import { EDICOES_CULTURAIS, getAllEdicoes, getEdicaoByYear, getAllMedia } from './edicoes';
import fs from 'node:fs';
import path from 'node:path';

describe('Edicoes Culturais Data & Media Verification', () => {
  const publicDir = path.resolve(__dirname, '../../public');

  it('should contain data for 2017, 2018, 2019, and 2020', () => {
    const years = [2017, 2018, 2019, 2020];
    years.forEach(year => {
      expect(EDICOES_CULTURAIS[year]).toBeDefined();
      expect(EDICOES_CULTURAIS[year].year).toBe(year);
      expect(EDICOES_CULTURAIS[year].items.length).toBeGreaterThan(0);
      expect(EDICOES_CULTURAIS[year].coverImage).toBeTruthy();
    });
  });

  it('should return all editions ordered by year descending', () => {
    const edicoes = getAllEdicoes();
    expect(edicoes.length).toBe(4);
    expect(edicoes[0].year).toBe(2020);
    expect(edicoes[1].year).toBe(2019);
    expect(edicoes[2].year).toBe(2018);
    expect(edicoes[3].year).toBe(2017);
  });

  it('should find edition by year', () => {
    const edicao2019 = getEdicaoByYear(2019);
    expect(edicao2019).toBeDefined();
    expect(edicao2019?.year).toBe(2019);
    expect(edicao2019?.title).toContain('2019');
  });

  it('should verify every media item file exists in the public directory', () => {
    const allMedia = getAllMedia();
    expect(allMedia.length).toBeGreaterThan(40);

    for (const media of allMedia) {
      const relativePath = media.src.startsWith('/') ? media.src.slice(1) : media.src;
      const fullPath = path.join(publicDir, relativePath);
      
      const fileExists = fs.existsSync(fullPath);
      expect(fileExists, File not found:  (src: )).toBe(true);
      
      const stat = fs.statSync(fullPath);
      expect(stat.size, File empty: ).toBeGreaterThan(0);
    }
  });

  it('should contain both image and video media types', () => {
    const allMedia = getAllMedia();
    const images = allMedia.filter(m => m.type === 'image');
    const videos = allMedia.filter(m => m.type === 'video');

    expect(images.length).toBeGreaterThanOrEqual(40);
    expect(videos.length).toBeGreaterThanOrEqual(10);
  });
});
