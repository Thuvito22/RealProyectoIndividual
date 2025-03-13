package es.cie.fernando.springbootback.repositories;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import es.cie.fernando.springbootback.negocio.Ordenador;

public class OrdenadorRowMapper implements RowMapper<Ordenador>{

    @Override
    public Ordenador mapRow(ResultSet rs, int rowNum) throws SQLException {
        return new Ordenador(rs.getInt("numserie")
        ,rs.getString("marca")
        ,rs.getString("modelo")
        ,rs.getDouble("precio"));
     
    }

}
