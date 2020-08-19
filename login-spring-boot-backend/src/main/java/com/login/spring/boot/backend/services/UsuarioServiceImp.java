package com.login.spring.boot.backend.services;

import java.util.List;

import com.login.spring.boot.backend.entity.Usuario;
import com.login.spring.boot.backend.models.dao.IUsuarioDao;

import org.springframework.beans.factory.annotation.Autowired;

public class UsuarioServiceImp implements IUsuarioService {

    @Autowired
    IUsuarioDao usuarioDao;

    @Override
    public List<Usuario> findAll() {
        return (List<Usuario>) usuarioDao.findAll();
    }

    @Override
    public Usuario findById(Integer id) {
        return usuarioDao.findById(id).orElse(null);
    }

    @Override
    public Usuario save(Usuario usuario) {
        return usuarioDao.save(usuario);
    }

    @Override
    public void delete(Integer id) {
        usuarioDao.deleteById(id);
    }
    
}