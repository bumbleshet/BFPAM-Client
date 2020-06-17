import md5 from 'crypto-js/md5';

export class AuthService {
  checkPermission(module_code: string, process_code = ''): boolean {
    let authorized = false;
    const permissions = JSON.parse(localStorage.getItem('permissions'));
    if (typeof(permissions) !== 'undefined' && permissions) {
      const encrypted_module_code = md5(module_code);

      // if module_code is not found
      if (typeof(permissions[encrypted_module_code]) === 'undefined') {
        authorized = false;
      } else {
        const module_processes = permissions[encrypted_module_code];

        // if process_code is defined and not found
        if (typeof(process_code) !== 'undefined') {
          // support multiple process codes
          const arrProcessCode = process_code.split(',');
          for (let i = 0; i < arrProcessCode.length; i++) {
            if (module_processes.indexOf(md5(arrProcessCode[i])) < 0) {
              authorized = false;
              break;
            } else {
              authorized = true;
            }
          }
        } else {
          authorized = true;
        }
      }
    }

    return authorized;
  }
}
