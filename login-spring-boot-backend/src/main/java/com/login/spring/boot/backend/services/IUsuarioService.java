package com.login.spring.boot.backend.services;

import java.util.List;

import com.login.spring.boot.backend.entity.Usuario;

public interface IUsuarioService {

    public List<Usuario> findAll();

    public Usuario findById(Integer id);

    public Usuario save(Usuario usuario);

    public void delete(Integer id);

}