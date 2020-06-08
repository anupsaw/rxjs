import { of } from 'rxjs';

export class AksOf {
    of_1(): void {
        of('of test ').subscribe((val)=> document.write(val));
    }
}