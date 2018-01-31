import { environment } from './../environments/environment';

export const API = environment.api;
export const TOKEN_USER = environment.tokenUser;

/** Api de Autentencação */

export const API_LOGIN_SISTEMA = 'autenticacao/criarToken';
export const API_ATUALIZA_TOKEN = 'autenticacao/atualizarToken';
