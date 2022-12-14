import {fetchNurse} from '../services/nurseService';

test("Throws error when id is passed empty while fetching nurse", async () => {
  await expect(fetchNurse(''))
    .toThrow(Error);
});